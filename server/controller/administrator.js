import { AdministratorModel } from '../model/administrator.js'
import { validateAdministrator } from '../schemas/administrator.js'

export class AdministratorController {
  static async create (req, res) {
    const result = validateAdministrator(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    try {
      await AdministratorModel.create({ input: result.data })
        .then(() => {
          return res.status(201).json({ message: 'Administrator created successfully' })
        })
        .catch(err => {
          return res.status(400).json({ error: err.message })
        })
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }
}
