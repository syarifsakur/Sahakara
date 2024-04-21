const { Sequelize , DataTypes} = require("sequelize")
const db = require("../config//db")

const User = db.define(
    "user",
    {
    username:{
        type: DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    foto:{
        type:DataTypes.STRING
    },
    role:{
        type:DataTypes.ENUM("toko","User"),
        defaultValue: "user"
    },
    token:{
        type:DataTypes.STRING
    }
},{
    freezeTableName:true
});


module.exports=User
