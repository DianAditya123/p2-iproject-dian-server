const jwt = require('jsonwebtoken')

module.exports = {
    signToken: (payload) => {
        return jwt.sign(payload, process.env.SECRET)
    },
    decodedToken: (access_token) => {
        return jwt.verify(access_token, process.env.SECRET)
    }
}