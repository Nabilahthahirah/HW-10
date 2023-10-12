const UserRepository = require("../repositories/userRepository.js");

//Menjalankan business logic
class UserService {
  static findAll = async (params) => {
    try {
      const users = await UserRepository.findAll(params);
      return users;
    } catch (err) {
      console.log(err);
    }
  };

  static findOne = async (params) => {
    try {
      const { id } = params;

      const user = await UserRepository.findOne(id);
      return user;
    } catch (err) {
      console.log(err);
    }
  };

  static create = async (params) => {
    try {
      const {email, gender, password, role} = params;
      
      let payload = {
        email,
        gender,
        password,
        role
      };

      const user = await UserRepository.create(payload);
      return user;
    } catch (err) {
      console.log(err, "Service <<<<<<<");
    }
  };

  static destroy = async (params) => {
    try {
      const { id } = params;
      const user = await UserRepository.destroy(id);
      return user;
    } catch (err) {
      console.log(err);
    }
  };

  static update = async (pathParams, params) => {
    try {
      const { id } = pathParams;

      const { email, gender, password, role } = params;

      let payload = {
        email,
        gender,
        password,
        role
      };
      console.log(payload, "<<<<<")

      const user = await UserRepository.update(id, payload);
      return user;
    } catch (err) {
      console.log(err, "err sevice");
    }
  };
}

module.exports = UserService;
