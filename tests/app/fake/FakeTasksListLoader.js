const TasksListLoader = require("../../../app/TasksListLoader");

/**
 * Sert à tester la gestion des données dans les fichiers
 */
class FakeTasksListLoader extends TasksListLoader {
    
    constructor(name, paths, fileName) {
        super(name, paths, fileName);
    }

    loadTasksList() {
        return super.loadTasksList();
    }

    save(task) {
        return super.save(task);
    }

}

module.exports = FakeTasksListLoader;
