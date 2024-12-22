const TaskPriority = require("./TaskPriority");

class Task {
    
    constructor(name = "Tâche", priority = TaskPriority.Normal, dateCreation = new Date(2000, 1, 1)) {
        this.name = name;
        this.priority = priority;
        this.date = dateCreation;
    }

    get getName() { return this.name; }
    get getPriority() { return this.priority; }

    set setName(taskName) { this.name = taskName; }
    set setPriority(taskPriority) { this.priority = taskPriority; }

    getCreationDate() {
        const year = this.date.getFullYear();
        const month = this.date.getMonth();
        const day = this.date.getDate();
        
        return `${day}-${month}-${year}`;
    }
  
}

module.exports = Task;
