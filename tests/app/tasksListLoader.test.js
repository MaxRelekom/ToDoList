const Task = require("../../components/Task");
const TaskPriority = require("../../components/TaskPriority");
const TasksListLoader = require("../../app/TasksListLoader");

describe("TasksList Loader", () => {
    // Test environment
    const PATHS = ["fakeDatas", "tasksLists"];

    test("Chargement d'une liste de tâches vide",async () => {
        const loader = new TasksListLoader(TaskPriority.Normal, PATHS, "emptyList.json")
        const emptyListLoaded = await loader.loadTasksList();
        
        expect(emptyListLoaded.getTitle).toBe("Normal");
        expect(emptyListLoaded.getTasks).toHaveLength(0);
    })

    test("Chargement d'une liste de tâches", () => {
        const loader = new TasksListLoader(TaskPriority.Normal, PATHS, "normalTasks.json")
        const normalListLoaded = loader.loadTasksList();
        
        expect(normalListLoaded.getTitle).toBe("Normal");
        expect(normalListLoaded.getTasks).toHaveLength(2);
    })

    test.skip("Chargement d'une liste de tâches après stockage d'autres tâches", () => {
        const loader = new TasksListLoader(TaskPriority.Normal, PATHS, "normalTasks.json")
        
        const t1 = new Task("Tâche 1", TaskPriority.Normal, new Date(2024, 10, 12));
        const t2 = new Task("Tâche 2", TaskPriority.Normal, new Date(2024, 10, 12));
        
        loader.save(t1);
        loader.save(t2);

        const normalListLoaded = loader.loadTasksList();
        
        expect(normalListLoaded.getTitle).toBe("Normal");
        expect(normalListLoaded.getTasks).toHaveLength(4);
    })
    
});
