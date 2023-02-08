const {Photografer, Foto, Type, Cart} = require('../models')

class homeController{
    static async showType(req, res, next){
        try {
            let data = await Type.findAll()
            res.status(200).json(data)
        } catch (error) {
            console.log(error);
        }
    }

    static async showPh(req, res, next){
        try {
            let data = await Photografer.findAll()
            res.status(200).json(data)
        } catch (error) {
            console.log(error);
        }
    }

    static async foto(req, res, next){
        try {
            let data = await Foto.findAll()
            res.status(200).json(data)
        } catch (error) {
            console.log(error);
        }
    }

    static async addCart(req, res, next) {
        try {
            let {PhotograferId, TypeId, address, date} = req.body
            let data = await Cart.create({PhotograferId, TypeId, address, UserId: req.user.id,date, status: false})
            res.status(201).json({message: "Success"})
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = homeController