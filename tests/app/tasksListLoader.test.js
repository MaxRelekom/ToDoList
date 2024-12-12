const TaskPriority = require("../../components/TaskPriority");
const FakeTasksListLoader = require("./fake/FakeTasksListLoader");

describe("TasksList Loader", () => {
    test("Chargement d'une liste de tâches", () => {
        const loader = new FakeTasksListLoader(TaskPriority.Normal, ["fakeDatas", "tasksList"], "normalTasks.json")
        const normalListLoaded = loader.loadTasksList();
        
        expect(normalListLoaded.getTasks).toHaveLength(2);
    })
});
