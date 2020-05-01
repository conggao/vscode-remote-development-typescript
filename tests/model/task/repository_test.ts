import { ITask } from "src/model/task/task";
import { describe, it } from "mocha";
import { Repository } from "src/model/task/repository";
import * as assert from "assert";

describe("Task repository", () => {
  it("contains two records after initialization", () => {
    const repo = new Repository();
    const tasks = repo.ListTasks();
    assert.equal(tasks.length, 2);
  });

  it("inserts a record", () => {
    const repo = new Repository();
    const newTask: ITask = {
      id: 0,
      text: "new task",
    };
    repo.AddTask(newTask);

    const tasks = repo.ListTasks();
    assert.equal(tasks.length, 3);
    assert.notEqual(
      tasks.find((task: ITask): boolean => task.text === "new task"),
      undefined
    );
  });
});
