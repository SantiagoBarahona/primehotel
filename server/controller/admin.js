import { AdminModel } from '../model/admin.js'
import { validateAdmin } from '../schemas/admin.js'

export class AdminController {
  static async create (req, res) {
    const result = validateAdmin(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    console.log(result.data)
    await AdminModel.create({ input: result.data })
      .then(() => {
        return res.status(201).json({ message: 'Administrator created successfully' })
      })
      .catch(err => {
        return res.status(400).json({ error: err.message })
      })
  }
}
