const mongoose=require("mongoose");
const { schema } =mongoose;

const seasonschema=new mongoose.Schema({
    death:{type: String, require: true},
      //death: season,
      numberOfDeath: number,
},
{
    timestamps: true
}
);

const deaths=mongoose.model("deaths",deathSchema);

module.exports=deaths;
