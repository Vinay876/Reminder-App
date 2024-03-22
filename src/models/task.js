import mongoose, { Schema } from "mongoose";

const TaskSchema = new mongoose.Schema({

    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    addedDate: {
        type: Date,
        require:true,
        default:Date.now(),
    },
   status:{
      type:String,
    //   enum means the value of status only can be pending or completed it cant be any other value
      enum:["pending","completed","just_added"],
      default:'pending',
    },
    // object id se hm do object ko link kr sakte hai aur dusre object ki id hm is type me store kr sakte hai 

userId:{
    type:mongoose.ObjectId,
    require:true
}
});
export const Task=mongoose.models.tasks || mongoose.model("tasks",TaskSchema)