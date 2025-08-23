// server/routes/admin.js
const express = require('express');
const router = express.Router();
const db = require('../config/db'); 
router.get('/', async (req, res) => {
  try {
    const [restaurants] = await db.query(
      'SELECT * FROM restaurants'
    );
    res.json({
      message: 'Users retrieved successfully',
      data: restaurants
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;