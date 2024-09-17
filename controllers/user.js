const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const {User} = require("../models")

class UserController{
    static async register(req, res, next) {
        try {
            let {username, email, password, phoneNumber} = req.body
            let user = await User.create({username, email, password, phoneNumber})
            res.status(201).json({id: user.id, email:user.email})
        } catch (error) {
            console.log(error);
        }
    }

    static async login(req, res, next){
        try {
            let {email, password} = req.body
            if (!email) {
                throw{name: "email"}
            }
            if (!password) {
                throw{name: "password"}
            }
            let user = await User.findOne({
                where: {email}
            })
            if (!user) {
                throw{name: "InvalidCredentials"}
            }
            let compare = comparePassword(password, user.password)
            if (!compare) {
                throw{name: "InvalidCredentials"}
            }
            let payload = {
                id: user.id
            }
            let access_token = signToken(payload)
            res.status(200).json({access_token, id: user.id})
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = UserController