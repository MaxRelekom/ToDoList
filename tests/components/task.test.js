const Task = require("../../components/Task");
const priority = require("../../components/TaskPriority");

describe.each(
    [
        { t: new Task("Tâche 1", priority.Normal, new Date(2024, 11, 28)), expected: [ "Tâche 1", "Normal", "28-11-2024" ] },
        { t: new Task(), expected: [ "Tâche", "Normal", "1-1-2000" ] }
    ]
)('Task initalisation', ({ t, expected }) => {
    test('Test sur le nom de la tâche', () => {
        expect(t.getName).toBe(expected[0]);
    });

    test('Test sur la priorité de la tâche', () => {
        expect(t.getPriority).toBe(expected[1]);
    });

    test('Test sur la date de la tâche', () => {
        expect(t.getCreationDate()).toBe(expected[2]);
    });
});

describe.each(
    [
        { t: new Task("Tâche 1", priority.Normal, new Date(2024, 11, 28)), expected: new Task("Nouvelle tâche", priority.Accessoire, new Date(2024, 11, 28)) },
        { t: new Task(), expected: new Task("Nouvelle tâche", priority.Accessoire) }
    ]
)('Task modification', ({ t, expected }) => {
    test('Test sur la modification de la tâche', () => {
        t.setName = "Nouvelle tâche";
        t.setPriority = priority.Accessoire;

        expect(t).toEqual(expected);
    });

    test.skip('Test sur la mauvaise modification de la tâche', () => {
        t.setName = 10;
        t.setName = 10;

        expect(t).not.toEqual(expected);
        expect(t.getName).not.toBe(10);
        expect(t.getPriority).not.toBe(10);
    });
});
