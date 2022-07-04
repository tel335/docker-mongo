import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    name: {
        type: String
    },
    rol: {
        type: String
    }
})

export default model('User', userSchema)
