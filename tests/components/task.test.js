
import { expect, test} from '@jest/globals';
import { Task } from '../../components/Task.js';

test("Init task", () => {
    const t = new Task("Tâche 1");
    expect(t.getName()).toBe("Tâche 1");
})
