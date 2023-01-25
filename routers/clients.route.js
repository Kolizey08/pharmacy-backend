const { Router } = require('express')
const { clientController } = require('../controllers/clients.controller')

const router = Router()

router.post('/client', clientController.addClient)
router.patch('/client/basket-add/:clientid/:medicineid', clientController.addClientBascket)
router.patch('/client/delete/:clientid/:medicineid', clientController.deleteClientBascket)
router.patch('/client/bascket-clear/:bascketid', clientController.clearBasket)
router.patch('/client/bay/:clientid/:medicinaid', clientController.bayMedicina)
router.patch('/client/wallet/:clientid', clientController.addWallet)



module.exports = router