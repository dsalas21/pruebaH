var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/saludo', function(req, res, next) {
  res.json({saludo:"Hola Mundo"});
});

router.get('/adios', function(req, res, next) {
  res.json({saludo:"Adios"});
});
module.exports = router;

router.get('/Us', async function(req, res, next) {
  try {
    const [rows] = await connection.query("SELECT * FROM Usuarios");
    if (rows.length === 0) {
      return res.status(204).json({ status: 204, message: "No items found" });
    }
    return res.status(200).json({ status: 200, data: rows });
  } catch (err) {
    return res.status(500).json({ status: 500, message: err.message });
  }
});