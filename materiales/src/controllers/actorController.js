const db = require('../database/models/index');

const list =(req, res) => {

    db.Actor.findAll()
        .then(actors=>{
            res.render('actorList', {'actors':actors});
        })
        

};

const detail = async (req,res)=>{

    try {
        const actor = await db.Actor.findByPk(req.params.id)
        res.render('actorDetail', { 'actor': actor });
        
    } catch (error) {
        console.log(error);
        
    }
};


module.exports ={

    list,
    detail
}