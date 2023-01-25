const { Router } = require('express')
const { medicineController } = require('../controllers/medicines.controller')

const router = Router()

router.post('/admin/medicine', medicineController.addMedicine)
router.get('/medicine', medicineController.getMedicine)
router.get('/medicine/:id', medicineController.getMedicineId)
router.get('/medicine/category/:id', medicineController.getMedicineCategoryId)
router.patch('/admin/medicine/:id', medicineController.updateMedicine)
router.delete('/admin/medicine/:id', medicineController.deleteMedicine)

module.exports = router