const fs = require('fs');
const path = require('path');

const createUser = (filepath, name) => {
  const file = path.join(filepath, name);
  console.log(file);

  if (fs.existsSync(file)) {
    const result = "The user already exists";
    return { success: false, message: result };
  } else {

    console.log('User created successfully.');
    fs.mkdirSync(file);
    return { success: true, message: "User created successfully." };
  }
};

module.exports = createUser;
