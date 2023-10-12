const MovieService = require("../services/movieService.js");

class moviesController {
  static findAll = async (req, res, next) => {
    try {
      const movies = await MovieService.findAll(req.query);

      return res.status(200).json({
        success: true,
        message: "Get movies success",
        data: {
          movies,
        },
      });
    } catch (err) {
      next(err);
    }
  };

  static findOne = async (req, res, next) => {
    try {
      const movie = await MovieService.findOne(req.params);

      if (!movie) {
        throw { name: "ErrorNotFound" };
      }

      return res.status(200).json({
        success: true,
        message: "Get movies success",
        data: {
          movie,
        },
      });
    } catch (err) {
      next(err);
    }
  };

  static create = async (req, res, next) => {
    try {
      const movie = await MovieService.create(req.file, req.body);
      console.log(req.boy)
      return res.status(201).json({
        success: true,
        message: "Movie created successfully",
        movie,
      });
    } catch (err) {
      next(err);
    }
  };
  
  static update = async (req, res, next) => {
    try {
      const movie = await MovieService.update(req.params, req.file, req.body);
      return res.status(201).json({
        success: true,
        message: "Movie created successfully",
        movie,
      });
    } catch (err) {
      next(err);
    }
  };

  static destroy = async (req, res, next) => {
    try {
      const movie = await MovieService.destroy(req.params);

      if (!movie) {
        throw { name: "ErrorNotFound" };
      }
      return res.status(200).json({
        success: true,
        message: "Movie deleted successfully",
        movie,
      });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = moviesController;
