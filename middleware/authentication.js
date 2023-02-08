const { decodedToken } = require("../helpers/jwt");
const {User} = require("../models")

async function authentication(req, res, next){
    try {
        let {access_token} = req.headers
        if (!access_token) {
            throw{name: 'invalid'}
        }
        let payload = decodedToken(access_token)
        let user = await User.findByPk(payload.id)
        if (!user) {
            throw{name: "invalid"}
        }
        req.user = {id: user.id, email: user.email}
        next()
    } catch (error) {
        console.log(error);
    }
}

module.exports = {authentication}