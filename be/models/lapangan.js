const { Sequelize , DataTypes} = require("sequelize")
const db = require("../config//db")

const Lapangan = db.define(
    "lapangan",
    {
        Nama:{
            type:DataTypes.STRING
        },
        
},{
    freezeTableName:true
});


module.exports=Lapangan
