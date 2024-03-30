import { mongoose } from 'mongoose'
// import { hashPassword } from '../services/user'

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

// hash user's password with salt before saving document to db
// userSchema.pre('save', async function () {  
//   this.password =await hashPassword(this.password)
// })

// extend matchPassword function unto userSchema
// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password)
// }

const User = mongoose.model('User', userSchema)

export default User