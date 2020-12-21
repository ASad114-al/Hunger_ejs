const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
    res.render('index')
})
router.get('/about', (req, res) => {
    res.render('about')
})
router.get('/contact', (req, res) => {
    res.render('contact')
})
router.get('/galerie', (req, res) => {
    res.render('galerie')
})
router.get('/team', (req, res) => {
    res.render('team')
})
router.get('/menu', (req, res) => {
    res.render('menu')
})
router.get('/team', (req, res) => {
    res.render('team')
})
router.get('/events', (req, res) => {
    res.render('events')
})
router.get('/booking', (req, res) => {
    res.render('booking')
})


module.exports = router;