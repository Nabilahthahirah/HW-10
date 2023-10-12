const UserService = require("../services/userService.js");
const { User } = require("../models");

class UserController {
  static findAll = async (req, res, next) => {
    try {
      const users = await UserService.findAll(req.query);

      return res.status(200).json({
        success: true,
        message: "Get movies success",
        data: {
          users,
        },
      });
    } catch (err) {
      next(err);
    }
  };

  static findOne = async (req, res, next) => {
    try {
      const user = await UserService.findOne(req.params);

      if (!user) {
        throw { name: "ErrorNotFound" };
      }

      return res.status(200).json({
        success: true,
        message: "Get movies success",
        data: {
          user,
        },
      });
    } catch (err) {
      next(err);
    }
  };

  static create = async (req, res, next) => {
    try {
      console.log(req.body);

      const user = await UserService.create(req.body);

      return res.status(201).json({
        success: true,
        message: "User created successfully",
        user
      });
    } catch (err) {
      next(err);
    }
  };

  static update = async (req, res, next) => {
    try {
      const user = await UserService.update(req.params, req.body);
      return res.status(201).json({
        success: true,
        message: "User Upadated successfully",
        user,
      });
    } catch (err) {
      next(err);
    }
  };

  static destroy = async (req, res, next) => {
    try {
      const user = await UserService.destroy(req.params);

      if (!user) {
        throw { name: "ErrorNotFound" };
      }
      return res.status(200).json({
        success: true,
        message: "Movie deleted successfully",
        user,
      });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = UserController;
