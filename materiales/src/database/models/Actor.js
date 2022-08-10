module.exports=(sequelize, dataTypes)=>{

    const Actor = sequelize.define('Actor',{

        id:{
            type:dataTypes.INTEGER,
            autoIncrement : true,
            primaryKey: true

        },
        first_name:{
            type:dataTypes.STRING
        },

        last_name:{

            type:dataTypes.STRING

        },
        rating:{
            type:dataTypes.INTEGER
        }
        
    },
        {
            
            timestamps : false
         }
    );
    return Actor

}
