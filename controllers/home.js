const { Photografer, Foto, Type, Cart, User } = require('../models')
const midtransClient = require('midtrans-client')

class homeController {
    static async showType(req, res, next) {
        try {
            let data = await Type.findAll()
            res.status(200).json(data)
        } catch (error) {
            console.log(error);
        }
    }

    static async showPh(req, res, next) {
        try {
            let data = await Photografer.findAll()
            res.status(200).json(data)
        } catch (error) {
            console.log(error);
        }
    }

    static async foto(req, res, next) {
        try {
            let data = await Foto.findAll({
                include: {
                    model: Photografer,
                    attibutes: {
                        include: ['username']
                    }
                }
            })
            res.status(200).json(data)
        } catch (error) {
            console.log(error);
        }
    }

    static async addCart(req, res, next) {
        try {
            let {PhotograferId, TypeId, address, date} = req.body
            let type = await Type.findByPk(TypeId)
            let data = await Cart.create({PhotograferId, TypeId, address, UserId: req.user.id, date, price: +type.price,status: false})
            res.status(201).json({message: "Success"})
        } catch (error) {
            console.log(error);
        }
    }

    static async showCart(req, res, next) {
        try {
            let data = await Cart.findAll({
                where: {
                    UserId: req.user.id
                }
            })
            res.status(200).json(data)
        } catch (error) {
            console.log(error);
        }
    }

    static async midtrans(req, res, next) {
        try {
            const user = await User.findByPk(req.user.id)
            let snap = new midtransClient.Snap({
                isProduction: false,
                serverKey: process.env.MIDTRANS_SERVER_KEY
            });

            let parameter = {
                "transaction_details": {
                    "order_id": "TRANSACTION_" + Math.floor(1000000 + Math.random() * 9000000),
                    "gross_amount": 1000000
                },
                "credit_card": {
                    "secure": true
                },
                "customer_details": {
                    "username": user.username,
                    "email": user.email,
                    "phone": user.phoneNumber
                }
            };
            let token = await snap.createTransaction(parameter)
            res.status(201).json(token)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = homeController