var userModel = require("./userModel");

module.exports.getDataFromDBService = () => {
  return userModel
    .find({})
    .then((result) => {
      return result;
    })
    .catch((error) => {
      throw new Error(`Error while getting data from DB: ${error}`);
    });
};

module.exports.createUserDBService = (userDetails) => {
  var userModelData = new userModel();

  userModelData.name = userDetails.name;
  userModelData.address = userDetails.address;
  userModelData.phone = userDetails.phone;

  return userModelData
    .save()
    .then((result) => {
      return result;
    })
    .catch((error) => {
      throw new Error(`Error while creating user: ${error}`);
    });
};

module.exports.updateUserDBService = (id, userDetails) => {
  return userModel
    .findByIdAndUpdate(id, userDetails)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      throw new Error(`Error while updating user: ${error}`);
    });
};

module.exports.removeUserDBService = (id) => {
  return userModel
    .findByIdAndDelete(id)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      throw new Error(`Error while removing user: ${error}`);
    });
};
