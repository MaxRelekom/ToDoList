const TasksList = require("../components/TasksList");

/**
 * Extrait les tâches d'un fichier nommé et crée une liste à partir de celles-ci.
 * Un fichier = Une liste de de données
 */
class TasksListLoader {

    /** 
     * @param name Le titre d'une liste de tâches (Une Priority)
     * @param paths Le chemin des dossiers du fichier
     * @param fileName Le fichier des données de la liste de tâches 
     */
    constructor(name, paths, fileName) {
         this.name = name;
    }

    /**
     * @return La liste des tâches extraite
     */
    loadTasksList() {
        return new TasksList();
    }

}

module.exports = TasksListLoader;
