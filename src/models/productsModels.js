import mongoose from 'mongoose'

export const statusEnum = [ "AVAILABLE", "NOT AVAILABLE", "DISCONTINUED" ]

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        // Si el cliente no me envia el dato, le respondo con el mensaje
        required: [ true, "El campo nombre es requerido" ],
        minLength: 3,
        maxLength: 50,
        unique: true,
        lowercase: true,
        trim: true
    },
    // precio de lista
    price: {
        type: Number,
        required: [ true, "El campo precio es requerido" ],
        // Minimo de precio
        min: [1, "El precio debe ser un numero"]
    },
    // Generamos un valor de ganancia
    profitRate: {
        type: Number,
        // +30% del valor de lista por defecto
        default: 1.30,
        min: [1, "La tasa de ganancia debe ser mayor o igual a 1"]
    },
    description: {
        type: String,
        minLength: 5,
        maxLength: 200,
    },
   
    status: {
        type: String,
            validate: {
                validator: function (status) {
                    return statusEnum.includes(status)
                },
                message: props => `${props.value} it's not a valid status`
            }
    },
   
    category: {type: mongoose.Schema.Types.ObjectId, ref: "category" },

    stock: {
        type: Number,
        default: 0,
        min: [0, "Stock can't be a negative number"]
    },


    highlighted: {
        type: Boolean,
        default: false
    },
})

    productSchema.methods.decreaseStock = async function (amount) {
        if(amount <= 0){
            throw new Error("Amount has to be a positive value")
        }

        if(this.stock < amount) {
            throw new Error("Not enough quantity")
        }
        this.stock -= amount
        await this.save()
    }

  
    productSchema.virtual("priceWithProfitRate").get(function () {
        return this.price * this.profitRate
    })

    productSchema.set("toJSON", {virtuals: true})
    productSchema.set("toObject", {virtuals: true})

export default mongoose.model("product", productSchema) 