import { createUserService, deleteUserService, getUsersService, updateUserService, validateUserService } from "../services/userService.js"

export const createUser = async (req, res) => {
    try {
        const response = await createUserService(req.body)
        res.status(201).json(response)
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}