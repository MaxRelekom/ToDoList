const Task = require("../components/Task");
const TasksList = require("../components/TasksList");

const { readFileSync } = require("fs");

/**
 * Extrait les tâches d'un fichier nommé et crée une liste à partir de celles-ci.
 * Un fichier = Une liste de données
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
     * @return La liste des tâches extraites
     */
    loadTasksList() {
        const tab = JSON.parse(readFileSync(this.file, 'utf-8'));

        tab.forEach(element => {
            // Création de la tâche
            const taskName = element.name;
            const taskPriority = element.priority;
            const taskDate = element.dateCreation;
            
            const task = new Task(taskName, taskPriority, taskDate);

            // Ajout de la tâche à la liste
            this.list.add(task);
        });

        return this.list;
    }

    /**
     * Ajoute la tâche dans la liste
     * 
     * @param task: La tâche à stocker dans la liste 
     */
    save(task) {
    }

    get getList() { return this.list; }

}

module.exports = TasksListLoader;
