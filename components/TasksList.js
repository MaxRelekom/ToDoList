const TaskPriority = require("./TaskPriority");

class TasksList {

    /**
     * Initialise une liste de tâches avec un titre et un tableau de tâches
     * 
     * @param title Le titre de la liste (Type des tâches)
     */
    constructor(title = TaskPriority.Normal) {
        this.title = title;
        this.tasks = new Array();
    }

    get getTitle() {
        return this.title;
    }

    /**
     * @return Le tableau des tâches
     */
    get getTasks() {
        return this.tasks;
    }

    /**
     * Ajoute une tâche dans la liste
     * 
     * @param {task} une tâche 
     */
    add(task) {
        this.tasks.push(task);
    }

    /**
     * Enlève une tâche de la liste
     * 
     * @param {task} une tâche 
     */
    remove(task) {
        const index = this.tasks.indexOf(task);
        if (index > -1) this.tasks.splice(index, 1);
    }

}

module.exports = TasksList;
