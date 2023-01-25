const Basket = require("../models/Basket.model");
const Client = require("../models/Client.model");
const Medicine = require("../models/Medicine.model");

module.exports.clientController = {
  addClient: async (req, res) => {
    try {
      const data = await Client.create({
        name: req.body.name,
        wallet: req.body.wallet,
        recipe: req.body.recipe,
      });
      await Basket.create({
        client: data._id,
      });
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  getClient: async (req, res) => {
    try {
      const data = await Client.find();
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  addClientBascket: async (req, res) => {
    try {
      const bascket = await Basket.findOne({ client: req.params.clientid });
      const client = await Client.findById(req.params.clientid);
      const medicine = await Medicine.findById(req.params.medicineid);

      if (medicine.recipe === true && client.recipe === false) {
        return res.json("Это лекарство нельзя купить без рецепта");
      }
      if (bascket.medicine.includes(req.params.medicineid)) {
        return res.json("это лекарство уже есть в карзине");
      }
      const sum = bascket.total + medicine.price;
      await bascket.updateOne({
        $push: { medicine: req.params.medicineid },
        $set: { total: sum },
      });
      res.json("добавлено в карзину");
    } catch (error) {
      res.json(error.message);
    }
  },
  deleteClientBascket: async (req, res) => {
    try {
      const bascket = await Basket.findOne({ client: req.params.clientid });
      const medicine = await Medicine.findById(req.params.medicineid);

      if (!bascket.medicine.includes(req.params.medicineid)) {
        return res.json("это лекарство не найдено в карзине");
      }
      const sum = bascket.total - medicine.price;
      await bascket.updateOne(
        { $pull: { medicine: req.params.medicineid }, $set: { total: sum } },
        { new: true }
      );
      res.json("лекарство удалено из карзины");
    } catch (error) {
      res.json(error.message);
    }
  },
  clearBasket: async (req, res) => {
    try {
      await Basket.findByIdAndUpdate(req.params.bascketid, {
        medicine: [],
        total: 0,
      });
      res.json("корзина очищена");
    } catch (error) {
      res.json(error);
    }
  },
  bayMedicina: async (req, res) => {
    try {
      const bascket = await Basket.findOne({ client: req.params.clientid });
      const client = await Client.findById(req.params.clientid);
      const medicine = await Medicine.findById(req.params.medicinaid);

      if (client.wallet < bascket.total) {
        return res.json("У вас не достаточно денег");
      }
      await bascket.updateOne({
        medicine: [],
        wallet: wallet - bascket.total,
        total: 0,
      });
      res.json("Поздровляем с покупкой");
    } catch (error) {
      res.json(error.message);
    }
  },
  addWallet: async (req, res) => {
    try {
      const data = Client.findByIdAndUpdate({
        wallet: req.body.wallet,
      });
      res.json(data)
    } catch (error) {
      res.json(error);
    }
  },
};
