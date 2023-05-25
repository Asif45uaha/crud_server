import userModel from "../models/userModel.js";
import cloudinary from "../utils/cloudinary.js";

export const createUser = async (req, res) => {
    try {
        const { username, email, password, image } = req.body


        const userExists = await userModel.findOne({ email: email })
        if (userExists) {
            return res.status(500).json({ msg: "User Already Exists!!!" })
        }
        const newUser = await userModel.create({
            username, email, password, image
        })
        if (newUser) {
            return res.status(201).json(newUser)
        }

    } catch (error) {
        return res.status(500).json({ msg: error.msg })
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await userModel.find({})
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({ msg: error.msg })
    }
}

export const getSingleUser = async (req, res) => {
    const { id } = req.params;
    try {
        if (id) {
            const singleUser = await userModel.findById(id)
            return res.status(200).json(singleUser)
        }

    } catch (error) {
        return res.status(400).json({ msg: error.msg })
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await userModel.findByIdAndUpdate(id, req.body)
        return res.status(200).json(updateUser)
    } catch (error) {
        return res.status(500).json({ msg: error.msg })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userDeleted = await userModel.findByIdAndDelete(id)
        res.status(200).json(userDeleted)
    } catch (error) {
        return res.status(500).json({ msg: error.msg })
    }
}