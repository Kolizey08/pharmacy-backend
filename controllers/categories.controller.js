const Category = require('../models/Category.model')

module.exports.categoryController = {
    addCategory: async (req, res)=> {
        try {
         const data = await Category.create({name: req.body.name})
         res.json(data)   
        } catch (error) {
            res.json(error)
        }
    },
    getCategory: async (req, res) => {
        try {
         const data = await Category.find()
         res.json(data)   
        } catch (error) {
            res.json(error)
        }
    },
    updateCategory: async (req, res) => {
        try {
           const data = await Category.findByIdAndUpdate(req.params.id, {
            name: req.body.name
           }, {new: true})
           res.json(data)
    
        } catch (error) {
           res.json(error) 
        }
    },
    deleteCategory: async (req, res) => {
        try {
            await Category.findByIdAndDelete(req.params.id)
            res.json('категория удалена')
        } catch (error) {
            res.json(error)
        }
    }
}