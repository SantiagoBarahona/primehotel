import { SALT_ROUNDS } from '../config.js'
import { AdminModel } from '../model/admin.js'
import { validateAdmin } from '../schemas/admin.js'
import bcrypt from 'bcrypt'

export class AdminController {
  static async create (req, res) {
    const result = validateAdmin(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const validatedInput = result.data
    const hashedPassword = await bcrypt.hash(validatedInput.password, SALT_ROUNDS)
    const data = {
      ...validatedInput,
      password: hashedPassword
    }
    await AdminModel.create({ input: data })
      .then(() => {
        return res.status(201).json({ message: 'Administrator created successfully' })
      })
      .catch(err => {
        return res.status(400).json({ error: err.message })
      })
  }
}
