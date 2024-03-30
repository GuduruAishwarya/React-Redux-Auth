import bcrypt from 'bcryptjs'
async function matchPassword(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
  }
  
async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
  }
export { matchPassword, hashPassword }
  