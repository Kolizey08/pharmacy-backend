const { Router } = require('express')
const { categoryController } = require('../controllers/categories.controller')

const router = Router()

router.post('/admin/category', categoryController.addCategory)
router.get('/category', categoryController.getCategory)
router.patch('/admin/category/:id', categoryController.updateCategory)
router.delete('/admin/category/:id', categoryController.deleteCategory)

module.exports = router