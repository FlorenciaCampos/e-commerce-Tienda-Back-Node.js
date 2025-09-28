import { createUserService, loginUserService, getUsersService, deleteUserService } from '../service/userService.js'

//crear usuarios
export const createUser = async (req, res) => {
    try {
        const response = await createUserService(req.body)
        res.status(201).json(response)
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}
//logueo de usuario valido
export const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body; 
      const response = await loginUserService(email, password);
      res.status(200).json(response);
    } catch (error) {
      return res
        .status(401)
        .json({ message: "Error en login", error: error.message });
    }
  };

  // Obtener todos los usuarios
export const getUsers = async (req, res) => {
    try {
       const users = await getUsersService()
       res.status(200).json(users)
    } catch (error) {
        console.log({error})
        if(error.statusCode === 204){
            return res.sendStatus(error.statusCode)
        }
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}

// Borrar el usuario
export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id
        const result = await deleteUserService(userId)
        return res.status(200).json(result)
    } catch (error) {
        if(error.statusCode === 404){
            return res.status(error.statusCode).json({ message: error.message })
        }
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}