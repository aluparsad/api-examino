require('dotenv').config()
const authRoute = require('express').Router();
const User = require('../model/User')

async function findUserWithEmail(email) {
    return await User.findOne({ email: email })
}

authRoute.put('/get', (req, res) => {
    const email = req.body.email
    findUserWithEmail(email)
        .then(user => res.send(user))
        .catch(err => res.status(406).send(err))
})

authRoute.post('/register', async (req, res) => {
    const data = req.body.user

    if (!data) return res.status(404).send({ err: "enter user data" })

    console.log('data', data)
    findUserWithEmail(data.email)
        .then(async (usr) => {

            console.log('user', usr)
            if (usr) res.send(usr)

            else {
                const nUser = new User(data);
                await nUser.save()
                res.send(nUser)
            }
        })
        .catch(err => {
            res.status(404).send(err)
        })



})

authRoute.post('/update', (req, res) => {
    const data = req.body.data

    User
        .updateOne({ uid: data[0] }, { type: data[1] })
        .then(user => {
            res.send(user)
        })
        .catch(err => res.status(404).send(err))
})
module.exports = authRoute;