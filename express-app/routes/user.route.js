const express = require('express');
const router = express.Router();
const users = require('../controllers/user.controller');

/* GET programming languages. */
router.get('/', users.get);

/* POST programming language */
router.post('/', users.create);

/* PUT programming language */
router.put('/:id', users.update);

/* DELETE programming language */
router.delete('/:id', users.remove);

module.exports = router;