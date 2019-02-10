// Import express and router
var express = require('express');
var router = express.Router();

// Import svn controller and create new instance
var taskController = require("../controllers/task.controller");
let task = new taskController();

// Assign Routes
router.get('/:userId', (req, res) => task.list(req, res));
router.post('/', (req, res) =>  task.create(req, res));
router.put('/:taskId', (req, res) => task.update(req, res));
router.delete('/:taskId', (req, res) => task.delete(req, res));
router.get('/:userId/pending', (req, res) => task.getTaskByStatus(req, res));

// Export Router
module.exports = router;