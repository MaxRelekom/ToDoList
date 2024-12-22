const TasksListLoader = require("./TasksListLoader");

class ToDoList {
    
    constructor(paths) {
        this.lists = new Array();

        const urgentTasksList = new TasksListLoader("Urgent", paths, "urgentTasks.json");
        const importantTasksList = new TasksListLoader("Important", paths, "importantTasks.json");
        const normalTasksList = new TasksListLoader("Normal", paths, "normalTasks.json");
        const accessoryTasksList = new TasksListLoader("Accessoire", paths, "accessoryTasks.json");
        
        this.lists.push(urgentTasksList.getList, importantTasksList.getList, normalTasksList.getList, accessoryTasksList.getList);
    }

    get getTasksLists() { return this.lists; }

}

module.exports = ToDoList;