import mongoose from "mongoose";


const Connection = async () => {
    const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@crud-users.6nvimfh.mongodb.net/?retryWrites=true&w=majority`
    try {
        const conn = await mongoose.connect(URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        if (conn) {
            return console.log("Database Connected SuccessFully");
        }
    } catch (error) {
        console.log("Error while Connecting to the Database");
    }

}

export default Connection;