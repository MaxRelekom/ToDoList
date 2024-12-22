const ToDoList = require("../../app/ToDoList");

describe("ToDoList creation", () => {

    let PATHS = [ "tests", "app", "fakeDatas", "tasksLists" ];

    test("Création de la ToDoList", () => {
        const toDoList = new ToDoList(PATHS);
        const lists = toDoList.getTasksLists;
        
        expect(lists).toHaveLength(4);
    });
});
