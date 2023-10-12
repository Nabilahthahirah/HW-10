const MovieRepository = require("../repositories/movieRepository.js");
// const { params } = require("../routes/movie.js");

//Menjalankan business logic
class MovieService {
  static findAll = async (params) => {
    try {
      const movies = await MovieRepository.findAll(params);
      return movies;
    } catch (err) {
      console.log(err);
    }
  };

  static findOne = async (params) => {
    try {
      const { id } = params;

      const movie = await MovieRepository.findOne(id);
      if (movie === null) {
        throw { name: "ErrorNotFound" };
      }

      return movie;
    } catch (err) {
      console.log(err);
    }
  };

  static create = async (fileImage, params) => {
    try {
      const { title, genres, year } = params;

      let payload = {
        title,
        genres,
        year,
      };

      if (fileImage) {

        let linkImage = `http://localhost:3000/${fileImage.filename})`;

        payload.photo = linkImage;
      }

      const movie = await MovieRepository.create(payload);
      return movie;
    } catch (err) {
      console.log(err, "<<<<<<<");
    }
  };

  static destroy = async (params) => {
    try {
      const { id } = params;
      const movie = await MovieRepository.destroy(id);
      return movie;
    } catch (err) {
      console.log(err);
    }
  };

  static update = async (pathParams, fileImage, params) => {
    try {
      const { id } = pathParams;

      const { title, genres, year } = params;

      let payload = {
        title,
        genres,
        year,
      };

      if (fileImage) {
        let linkImage = `http://localhost:3000/${fileImage.filename})`;

        payload.photo = linkImage;
      }

      const movie = await MovieRepository.update(id, payload);
      return movie;
    } catch (err) {
      console.log(err, "err sevice");
    }
  };
}

module.exports = MovieService;
