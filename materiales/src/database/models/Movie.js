module.exports=(sequelize, dataTypes)=>{

    const Movie = sequelize.define('Movie',{


        id:{
            type:dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement : true
        },
        title:{
            type: dataTypes.STRING
        },
        rating:{
            type: dataTypes.INTEGER
        },
        awards:{
            type: dataTypes.INTEGER
        },
        release_date:{

            type: dataTypes.DATE

        },
        length:{
            type: dataTypes.INTEGER
        }


    },
    {
        
        timestamps : false
    }
    );
    return Movie
}