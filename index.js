const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 5000

app.use(express.json())
app.use(require('./routers/categories.route'))
app.use(require('./routers/medicines.route'))
app.use(require('./routers/clients.route'))


const start = async () => {
    try {
     await mongoose.connect('mongodb+srv://Kolizey08:Maga@cluster0.nmzoj5b.mongodb.net/Pharmacy')
     app.listen(port, ()=> {
        console.log('Соединение со сервером установлено')
     })   
    } catch (error) {
        console.log(error)
    }
}
start()