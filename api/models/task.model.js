// Import task enitity 
const taskEntity = require('../entity/task.entity');
module.exports = class TaskModel {
    // Retrieve and return all task from the database.
    findAll(userId){
       return taskEntity.find({userId:userId},).sort({_id: "descending"});
    };

    // Create a Note
     create(params){
        const task = new taskEntity({
            userId:params.userId,
            taskDesc:params.taskDesc, 
         });
        // Save Note in the database
        return task.save();
    }     

    // Update Task
    update(params){
        console.log(params);
        return taskEntity.findByIdAndUpdate(params.taskId, {
            taskCompleted: params.taskCompleted,
        })
    }

    delete(taskId){
        return taskEntity.findByIdAndRemove(taskId);
    
    }
   
    findAllByStatus(userId){
        return taskEntity.find({userId:userId,taskCompleted:0});
     };
}

