var express = require('express');
const connection = require('../config/db');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
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

/*
router.post('/', async function(req, res, next){
  try {
    const { firstName, lastName, email, password, dob, gender, phone, address, city } = req.body;
    if (!firstName || !lastName || !email || !password || !dob || !gender || !phone || !address || !city) {
      return res.status(400).json({ status: 400, message: "Invalid request data" });
    }

    const [result] = await connection.query('INSERT INTO users (first_name, last_name, email, password, birth_date, gender, phone_number, address, city) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [firstName, lastName, email, password, dob, gender, phone, address, city]);
    res.status(200).json({ status: 200, message: "Item created successfully", data: result });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
})
*/
module.exports = router;
