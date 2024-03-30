import jwt from 'jsonwebtoken'

// generate token that expires in 12 hours
export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '12h' })
}
