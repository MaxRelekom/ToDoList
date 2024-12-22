const Task = require("../../components/Task");
const priority = require("../../components/TaskPriority");
const TasksListLoader = require("../../app/TasksListLoader");

describe("TasksList loader", () => {
    // Test environment
    let PATHS;

    beforeEach(() => {
        PATHS = [ "tests", "app", "fakeDatas", "tasksLists", "loader" ];
    });

    test("Chargement d'une liste de tâches vide", () => {
        const loader = new TasksListLoader(priority.Normal, PATHS, "emptyList.json")
        const emptyListLoaded = loader.loadTasksList();
 
        expect(emptyListLoaded.getTitle).toBe("Normal");
        expect(emptyListLoaded.getTasks).toHaveLength(0);
    })

    test("Chargement d'une liste de tâches", () => {
        const loader = new TasksListLoader(priority.Normal, PATHS, "datas.json")
        const normalListLoaded = loader.loadTasksList();
        
        expect(normalListLoaded.getTitle).toBe("Normal");
        expect(normalListLoaded.getTasks).toHaveLength(2);
    })

    test.skip("Chargement d'une liste de tâches après stockage d'autres tâches", () => {
        const loader = new TasksListLoader(priority.Normal, PATHS, "normalTasks.json")
        
        const t1 = new Task("Tâche 1", priority.Normal, new Date(2024, 10, 12));
        const t2 = new Task("Tâche 2", priority.Normal, new Date(2024, 10, 12));
        
        loader.save(t1);
        loader.save(t2);

        const normalListLoaded = loader.loadTasksList();
        
        expect(normalListLoaded.getTitle).toBe("Normal");
        expect(normalListLoaded.getTasks).toHaveLength(4);
    })
    
});
