const fs = require('fs');
const path = require('path');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const TMDB_API_KEY =  process.env.TMBD; 

const getVideosData = async (folderPath) => {
  const videosFolderPath = path.join(folderPath);
  const folders = fs.readdirSync(folderPath);

  const videosData = await Promise.all(
    folders.map(async (folder) => {
      const folderPath = path.join(videosFolderPath, folder);
      const files = fs.readdirSync(folderPath);

      const videos = await Promise.all(
        files.map(async (file, index) => {
          const videoPath = path.join(file);
          const videoName = file.replace(/\.[^/.]+$/, '');

          const tmdbData = await getTMDBMovieData(videoName);
          const tmdbId = tmdbData?.results[0]?.id || null;

          return {
            id: index,
            name: videoName,
            url: videoPath,
            tmdbId: tmdbId,
            tmdbData: tmdbData?.results[0] || null
          };
        })
      );

      return {
        folder: folder,
        videos: videos
      };
    })
  );

  return videosData;
};

const getTMDBMovieData = async (movieTitle) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(
        movieTitle
      )}&language=fr-FR`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = getVideosData;
