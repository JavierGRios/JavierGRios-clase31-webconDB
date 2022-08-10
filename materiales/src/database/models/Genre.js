
module.exports = (sequelize, dataTypes)=>{


    const Genre = sequelize.define('Genre',{

        id:{
            type: dataTypes.INTEGER,
            autoIncrement : true,
            primaryKey: true


        },
        name:{
            type:dataTypes.STRING,

        },
        ranking:{
            type: dataTypes.INTEGER
        },
        active:{
            type: dataTypes.TINYINT
        }
    },
    {
        tablename : 'genres',
        timestamps : false
    },
    );
    return Genre

}