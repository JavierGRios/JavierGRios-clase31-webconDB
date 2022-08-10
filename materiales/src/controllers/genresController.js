const db = require('../database/models/index');


const list= (req,res) =>{

    db.Genre.findAll()
        .then( genres =>{

            res.render('genresList',{ genres})


        })
    
};

const detail = async (req,res)=>{

    try{
        const genre = await db.Genre.findByPk(req.params.id)
        res.render('genresDetail',{ genre })


    } catch (error) {
        console.log(error);
        
    }

    }



module.exports={
    list,
    detail
};