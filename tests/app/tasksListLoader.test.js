
describe("TasksList Loader", () => {
    test("Chargement d'une liste de tâches", () => {
        loader = new TasksListLoader("normalTasks.json");
        loader.loadTasksList();
        
    })
});
