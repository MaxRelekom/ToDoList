
const TasksList = require("../../components/TasksList");
const priority = require("../../components/TaskPriority");
const Task = require("../../components/Task");

describe('TasksList initalisation', () => {
    test("Init TasksList", () => {
        const list = new TasksList(priority.Important);
        
        expect(list.getTitle).toBe("Important");
        expect(list.getTasks).toHaveLength(0);
    });
});

describe('TasksList add', () => {
    test("Add 3 tasks to taskslist", () => {
        const list = new TasksList(priority.Important);

        list.add(new Task("Task 1", priority.Normal));
        list.add(new Task("Task 2", priority.Normal));
        list.add(new Task("Task 3", priority.Normal));

        expect(list.getTasks).toHaveLength(3);
    });

    test("Delete task of taskslist", () => {
        const list = new TasksList(priority.Important);
        const task = new Task("Task 2", priority.Normal);

        // Fill tasksList
        list.add(new Task("Task 1", priority.Normal));
        list.add(task);

        // Delete second task
        list.remove(task);

        expect(list.getTasks).toHaveLength(1);
        expect(list.getTasks).not.toContain(task);
    });
});
