// Import the task service and create new instance
const taskModel=require('../models/task.model');
const taskModelObject = new taskModel();
/*
	Task controllers used get the task and add the task
	Export the task controller
*/
module.exports = class TaskController{
	
	// Get task based on task id
	async list(req, res) {
		// Handle the try catch error
		try
		{
			// Validate Request
			if(!req.params.userId) {
				return res.status(400).send({
					message: "User id can not be empty"
				});
			}

			let result = await taskModelObject.findAll(req.params.userId);
			res.send(result);
			
		} catch(e) {
			res.send( 'Something went wrong!')
		} 
		
	}

	// Get task based on post values
	async create(req,res){
		// Handle the try catch error
		try
		{
				// Validate Request
			if(!req.body.taskDesc) {
				return res.status(400).send({
					message: "Task content can not be empty"
				});
			}

			let result = await taskModelObject.create(req.body);
			res.send(result);
		} catch(e) {
			res.send('Something went wrong!')
		}
	}
	
	
	// update task based on post values
	async update(req,res){
		// Handle the try catch error
		try
		{
			req.body.taskId = req.params.taskId;
			let result = await taskModelObject.update(req.body).catch( err => res.send(err));
			res.send(result);
		} catch(e) {
			res.send( 'Something went wrong!');
		}
	}	

	// delet task based on task id
	async delete(req,res){
		//Handle the try catch error
		try
		{
			// Validate Request
			if(!req.params.taskId) {
				return res.status(400).send({
					message: "Task id can not be empty"
				});
			}
			let result = await taskModelObject.delete(req.params.taskId).then( task => {
				if(!task) {
					return res.status(404).send({
						message: "task not found with id " + req.params.noteId
					});
				}
				res.send({message: "task deleted successfully!"});			
			}).catch(err => {
				res.send(result);	
			});
			
		} catch(e) {
			res.send("Something went wrong!");
		}
	}

	async getTaskByStatus(req,res){
		// Handle the try catch error
		try
		{
			let result = await taskModelObject.findAllByStatus(req.params.userId);
			res.send(result);
			
		} catch(e) {
			res.send( 'Something went wrong!')
		} 
	}
}