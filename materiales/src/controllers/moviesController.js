
const db = require('../database/models/index');


const list =(req, res) => {

    db.Movie.findAll()
        .then(movies=>{
            res.render('moviesList', {'movies':movies});
        })
        

};

const detail = async (req,res)=>{

    try {
        const movie = await db.Movie.findByPk(req.params.id)
        res.render('moviesDetail', { 'movie': movie });
        
    } catch (error) {
        console.log(error);
        
    }

};
const newest =(req, res) => {

    db.Movie.findAll({
        order:[
            ['release_date', 'ASC']
        ]
    })                  
        .then(movies=>{
            res.render('newestMovies', {'movies':movies});
        })
        

};


module.exports ={
    list,
    detail,
    newest
     

}