const {Movie} = require("../models");

//Gunakan method sequelize
class MovieRepository{
    static findAll = async (params = {}) =>{
        try {
            const movies = await Movie.findAll();
            return movies;
        } catch (err) {
            console.log(err);
        }
    }

    static findOne = async (id) =>{
        try {
            const movie = await Movie.findOne({
                where: {
                    id
                }
            })

            return movie;
        } catch (err) {
            console.log(err,"<<<<")
        }
    }

    static create = async (payload) =>{
        try {
            const movie = await Movie.create(payload);
            return movie;
        } catch (err) {
            console.log(err)
        }
    }

    static update = async (id, payload) =>{
        try {
            const movie = await Movie.update(payload, {
                where:{
                    id
                }
            })
            return movie;
        } catch (err) {
            console.log(err)
        }
    }

    static destroy = async (id) => {
        try {
            const movie = Movie.destroy({
                where: {
                    id
                }
            });
            return movie;
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = MovieRepository;