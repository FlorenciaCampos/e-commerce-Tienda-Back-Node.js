import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import { isGoodPassword } from "../utils/validator.js";


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        maxlength: 20,
        minlength: 2,
        trim: true,
        lowercase: true,
    },

    lastName: {
        type: String,
        required: true,
        maxlength: 20,
        minlength: 2,
        trim: true,
        lowercase: true, 
    },

    email:{
        type: String,
        required: true,
        maxlength: 30,
        minlength: 2,
        trim: true,
        lowercase: true,
        unique: true, 
        match: /^\S+@\S+\.\S+$/,
    },

    age:{
        type: Number,
        required: true,
        min:16,
        max: 110,
    },

    password:{
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                return isGoodPassword(value)
            },
            message:
            "La contraseña debe tener entre 6 y 12 caracteres, con al menos un número, una letra mayúscula y una letra minúscula."
        }
    }

}, {timestamps:true})

//  Encriptar la contraseña antes de guardar
userSchema.pre("save", function (next) {
    if (!this.isModified("password")) return next(); 
    this.password = bcrypt.hashSync(this.password, 10) 
    next()
})

// Método para comparar contraseñas en login
userSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
};

export default mongoose.model("User", userSchema)
