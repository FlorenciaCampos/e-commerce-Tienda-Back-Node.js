import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        maxlength: 30,
        minlength: 2
    }
}, {
    timestamps: true} ) //se agregan dos campos: createdAt: fecha en que se creo el doc// updateAt: en que se modifica

    export default mongoose.model("category", categorySchema) 