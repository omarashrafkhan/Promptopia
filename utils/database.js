import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async ()=>{
    mongoose.set('strictQuery',true);

    if(isConnected){
        console.log("mongo is connected"); return;
    }


    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: "share_prompt",
            useNewUrlParser:true,
            useUnifiedTopology: true,
        })

        isConnected = true;

        console.log('mongo connection established')
    } catch (error) {
        console.log(error)
        
    }

}