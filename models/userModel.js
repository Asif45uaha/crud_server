import mongoose from "mongoose";

// username, email, password, FileUrl
const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,

    }
    ,
    image: {
        type: String,
        default: "https://res.cloudinary.com/ddvmanpjt/image/upload/v1677411303/cld-sample-4.jpg"
    }
})

const userModel = mongoose.model("users", userSchema)

export default userModel;