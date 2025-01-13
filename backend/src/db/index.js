import mongoose from "mongoose"
import {DB_NAME} from "../onstants.js"
// sachin-social
// ms20051502

const connectdb = async () =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`mongodb connected to atlas || DB HOST ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Mongodb connection failed!!!" , error)
        process.exit(1)
    }
}

export default connectdb

