const TaskPriority = require("./TaskPriority");

class Task {
    
    constructor(name = "Tâche", priority = TaskPriority.Normal, dateCreation = new Date(2000, 1, 1)) {
        this.name = name;
        this.priority = priority;

        // Refactor dateCreation with month-1 => 0 = January
        this.dateCreation = new Date(dateCreation.getFullYear(), dateCreation.getMonth() - 1, dateCreation.getDate());
    }

    get getName() {
        return this.name;
    }

    get getPriority() {
        return this.priority;
    }

    setName(taskName) {
        this.name = taskName;
    }

    setPriority(taskPriority) {
        this.priority = taskPriority;
    }

    getDate() {
        const year = this.dateCreation.getFullYear();
        const month = this.dateCreation.toLocaleString("default", { month: "long"});
        const day = this.dateCreation.getDate();
        
        return `${day} ${month} ${year}`;
    }
  
}

module.exports = Task;
