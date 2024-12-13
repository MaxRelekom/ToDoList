const TasksList = require("../components/TasksList");

/**
 * Extrait les tâches d'un fichier nommé et crée une liste à partir de celles-ci.
 * Un fichier = Une liste de de données
 */
class TasksListLoader {

    #tasksList;

    /** 
     * @param name Le titre d'une liste de tâches (Une Priority)
     * @param paths Le chemin des dossiers du fichier
     * @param fileName Le fichier des données de la liste de tâches 
     */
    constructor(name, paths, fileName) {
        this.name = name;

        // Récupérer le chemin complet du fichier
        paths.push(fileName);
        this.file = paths.join('/');
    }

    /**
     * @return La liste des tâches extraite
     */
    loadTasksList() {
        // Extraire les tâches du fichier
        // Créer la liste de tâches à partir des données
        this.#tasksList = new TasksList(this.name);
        return this.#tasksList;
    }

    /**
     * @param task: La tâche à stocker dans la liste 
     */
    save(task) {
        // Ajuter la tâche dans la liste
    
    }

    getName() {
        return this.file;
    }

}

module.exports = TasksListLoader;
