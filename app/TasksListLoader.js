const Task = require("../components/Task");
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

        // Récupérer le chemin complet du fichier
        paths.push(fileName);
        this.file = paths.join('/');

        this.list = new TasksList(this.name);
    }

    /**
     * @return La liste des tâches extraite
     */
    loadTasksList() {
        // Création du tableau pour récupérer les tâches
        const extractedTasks = new Array();

        // Récupérer les tâches (sous forme d'Object) du fichier JSON
        fetch(this.file)
        .then(res => res.json())
        .then(data => {
            extractedTasks.push(data);
        });
       
        // Modification du tableau d'Objects en tableau de Tasks
        extractedTasks.forEach(o => {
            const taskName = o.name;
            const taskPriority = o.priority;
            const taskDate = o.dateCreation;

            const task = new Task(taskName, taskPriority, taskDate);
            
            // Ajouter chaque tâche à la liste
            this.list.add(task);
        });

        // Retourner la liste
        return this.list;
    }

    /**
     * @param task: La tâche à stocker dans la liste 
     */
    save(task) {
        // Ajouter la tâche dans la liste
    
    }

}

module.exports = TasksListLoader;
