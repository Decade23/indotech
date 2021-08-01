const User = require("../models/User")
const slugify = require("slugify")

const create = async (req, res) => {
    try {
        
        const newUser = await new User(req.body).save()
        res.json(newUser)

    } catch (e) {
        res.status(400).json({
            err: e.message
        })
    }    
}

const update = async (req, res) => {
    try {
        const { id } =req.params
        const updated =  await User.findByIdAndUpdate(id, req.body, { new: true }).exec()
        
        res.json(updated)

    } catch (e) {
        console.log(e)
        res.status(400).json({
            err: e.message
        })
    }    
}

const remove = async (req, res) => {
    try {
        const { id } =req.params
        const deleted =  await User.findByIdAndRemove(id).exec()
        
        res.json(deleted)

    } catch (e) {
        console.log(e)
        res.status(400).json({
            err: e.message
        })
    }    
}

const read = async (req, res) => {
    try {
        const { id } =req.params
        const user =  await User.findById(id).exec()
        
        res.json(user)

    } catch (e) {
        console.log(e)
        res.status(400).json({
            err: e.message
        })
    }    
}

const lists = async (req, res) => {
    try {
        const { page } = req.body
        const currentPage = page || 1
        const perPage = 3

        const users =  await User.find({})
        .skip( ( currentPage - 1 ) * perPage )
        .limit(perPage)
        .exec()
        
        res.json(users)

    } catch (e) {
        console.log(e)
        res.status(400).json({
            err: e.message
        })
    }    
}

module.exports = { create, update, remove, read, lists }