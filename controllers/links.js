const Link = require('../models/link')

module.exports = {
    index,
    show, 
    create,
    // update,
    // delete: deleteOne
}

async function index(req, res) {
    const links = await Service.find({})
    res.status(200).json(links)
}

async function show(req, res) {
    const link = await Service.findById(req.params.id)
    res.status(200).json(link)
}

async function create(req, res) {
    req.body.user = req.user
    req.body.creator = req.user.name
    const link = await Link.create(req.body)
    res.status(201).json(link)
}

// async function update(req, res) {
//     const updatedService = await Service.findByIdAndUpdate(req.params.id, req.body, {new:true})
//     res.status(200).json(updatedService)
// }

// async function deleteOne(req, res) {
//     const deletedService = await Service.findByIdAndRemove(req.params.id)
//     res.status(200).json(deletedService)
// }