const mongoose=require("mongoose");
const { schema } =mongoose;

const deathSchema=new mongoose.Schema({
    death:{type: String, require: true},
      //death: season,
      numberOfDeath: Number,
},
{
    timestamps: true
}
);

const deaths=mongoose.model("deaths",deathSchema);

module.exports=deaths;
