
//model
const { User } = require('../models/user.model')
const { Review } = require('../models/reviews.model')
const { Movie } = require('../models/movies.model')
const { ActorInMovie } = require('../models/actorInMovie.model')
const { Actor } = require('../models/actor.model')


const initModels = () => {

    // 1 User <--> M Review
    User.hasMany(Review);
    Review.belongsTo(User);

    // 1 Movie <--> M Review
    Movie.hasMany(Review);
    Review.belongsTo(Movie);

    // M Movie <--> M Actor
    Movie.belongsToMany(Actor, { through: ActorInMovie });
    Actor.belongsToMany(Movie, { through: ActorInMovie });

}

module.exports = { initModels }