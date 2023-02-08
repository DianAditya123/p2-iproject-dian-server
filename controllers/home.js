const {Photografer, Foto, Type, Cart, Transction} = require('../models')

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
}

module.exports = homeController