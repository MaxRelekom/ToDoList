const Task = require("../../components/Task");
const TaskPriority = require("../../components/TaskPriority");
const FakeTasksListLoader = require("./fake/FakeTasksListLoader");

describe("TasksList Loader", () => {
    // Test environment

    test("Chargement d'une liste de tâches vide", () => {
        const loader = new FakeTasksListLoader(TaskPriority.Normal, ["fakeDatas", "tasksList"], "normalTasks.json")
        const normalListLoaded = loader.loadTasksList();
        
        expect(normalListLoaded.getTitle).toBe("Normal");
        expect(normalListLoaded.getTasks).toHaveLength(0);
    })

    test("Chargement d'une liste de tâches", () => {
        const loader = new FakeTasksListLoader(TaskPriority.Normal, ["fakeDatas", "tasksList"], "normalTasks.json")
        
        const t1 = new Task("Tâche 1", TaskPriority.Normal, new Date(2024, 10, 12));
        const t2 = new Task("Tâche 2", TaskPriority.Normal, new Date(2024, 10, 12));
        
        loader.save(t1);
        loader.save(t2);

        const normalListLoaded = loader.loadTasksList();
        
        expect(normalListLoaded.getTitle).toBe("Normal");
        expect(normalListLoaded.getTasks).toHaveLength(2);
    })
});
