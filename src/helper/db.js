import mongoose from "mongoose"
// import {User} from "../models/user";

export const connectDb = async () => {

    try {
        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: "work_manager",
        });
        console.log("db connected....")

        // testing and creating new user

        // const uuser = new User({
        //     name: 'testname',
        //     email: 'test@gmail.com',
        //     password: 'testpassword',
        //     about: 'this is testing'
        // });
        // await uuser.save()

        // console.log("user is created")
        // console.log(connection.host)
        console.log("connected to host", connection.host)
    } catch (error) {
        console.log('failes to connect with database')
        console.log(error)
    }
}