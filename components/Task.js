class Task {
    
    constructor(name = "Task", priority = null) {
        this.name = name;
        this.priority = priority;
    }

    get getName() {
        return this.name;
    }
}

export default Task;