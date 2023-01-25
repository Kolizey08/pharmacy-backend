const Medicine = require('../models/Medicine.model')

module.exports.medicineController = {
    addMedicine: async (req, res)=> {
        try {
         const data = await Medicine.create({
            name: req.body.name,
            price: req.body.price,
            recipe: req.body.recipe,
            category: req.body.category
        })
         res.json(data)   
        } catch (error) {
            res.json(error)
        }
    },
    getMedicine: async (req, res) => {
        try {
         const data = await Medicine.find().populate('category')
         res.json(data)   
        } catch (error) {
            res.json(error)
        }
    },
    getMedicineId: async (req, res) => {
        try {
           const data = await Medicine.findById(req.params.id).populate('category')
           res.json(data) 
        } catch (error) {
            res.json(error)
        }
    },
    getMedicineCategoryId: async (req, res) => {
        try {
          const data = await Medicine.find({category: req.params.id}).populate('category')
          res.json(data)  
        } catch (error) {
            res.json(error)
        }
    },

    updateMedicine: async (req, res) => {
        try {
           const data = await Medicine.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            price: req.body.price,
            recipe: req.body.recipe,
            category: req.body.category
           }, {new: true})
           res.json(data)
    
        } catch (error) {
           res.json(error) 
        }
    },
    deleteMedicine: async (req, res) => {
        try {
            await Medicine.findByIdAndDelete(req.params.id)
            res.json('лекарство удалено')
        } catch (error) {
            res.json(error)
        }
    },
}