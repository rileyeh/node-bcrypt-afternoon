module.exports = {
    dragonTreasure: async (req, res) => {
        const db = req.app.get('db')

        const getTreasure = await db.get_dragon_treasure(1)

        return res.status(200).send(getTreasure)
    },

    getUserTreasure: async (req, res) => {
        const db = req.app.get('db') 
        console.log(req.session.user)

        let sickTreasureBro = await db.get_user_treasure([req.session.user.id])

        return res.status(200).send(sickTreasureBro)
    },

    addUserTreasure: async (req, res) => {
        let { treasureURL } = req.body
        let { id } = req.session.user
        const db = req.app.get('db')

        let userTreasure = db.add_user_treasure([treasureURL, id])

        return res.status(200).send(userTreasure)
    }
}