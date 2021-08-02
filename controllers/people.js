const { people } = require("../models/People")

const getPeople = async (reg, res) => {
    res.json(people)
}

const update = async (req, res) => {
    //let p = {}
    const { old_name, name } = req.body

    for (i = 0; i < people.length; i++) {
        if (people[i].nama == old_name) {
            people[i].nama = name
            
        }
    }

    

    res.json(people.filter(searched(name)))
}

const findByName = async (req, res) => {
    let r = {}
    const { name } = req.body
    
    r.result = people.filter(searched(name))
    
    res.json(r)
}

const searched = (keyword) => (p) => p.nama === keyword

module.exports = { getPeople, update, findByName }