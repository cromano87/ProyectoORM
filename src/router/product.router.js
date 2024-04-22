// Se crean las rutas de los productos

const router = require('express').Router();

router.get('/products', (req, res) => {
    res.send('I am a Router get all products');
});

router.get('/products', (req, res) => {
    res.send('I am a Router get one product');
});

router.post('/products', (req, res) => {
    res.send('I am a Router post');
});

router.put('/products', (req, res) => {
    res.send('I am a Router put');
});

router.delete('/products', (req, res) => {
    res.send('I am a Router delete');
});

module.exports = router;