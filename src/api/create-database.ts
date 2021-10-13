import database from "./database/database";
import UserModel from "./database/models/users";
import TaskModel from "./database/models/tasks";

if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = "sqlite:src/api/db.sqlite";
}

console.log("DATABASE:", process.env.DATABASE_URL);

(async () => {
  await database.connect();
  /* remove existing user and tasks */
  await UserModel.destroy({
    where: {
      id: "15d0fdf1-a589-4144-8703-77eafedd574b"
    }
  });
  /* add default user */
  await UserModel.create({
    id: "15d0fdf1-a589-4144-8703-77eafedd574b",
    username: "david",
    name: "David",
    password: "12345678"
  });
  /* add default tasks */
  await TaskModel.bulkCreate([
    {
      id: "2220f0ee-49d3-4847-9b75-9dbcfce971e7",
      userId: "15d0fdf1-a589-4144-8703-77eafedd574b",
      name: "Task 1",
      description: null,
      priority: 4,
      completed: false,
      dueAt: null
    },
    {
      id: "0d40a792-9d19-4583-9aa4-3105a788ba07",
      userId: "15d0fdf1-a589-4144-8703-77eafedd574b",
      name: "Task 2",
      description: "With a description!",
      priority: 4,
      completed: false,
      dueAt: null
    },
    {
      id: "6c616526-d9a8-4abd-95db-f0cadc0520f5",
      userId: "15d0fdf1-a589-4144-8703-77eafedd574b",
      name: "Task 3",
      description: "I have a due date",
      priority: 4,
      completed: false,
      dueAt: new Date("2021-10-17 12:10:46.219 +00:00")
    },
    {
      id: "563d65c1-c5f0-4833-b26f-cf4478f97220",
      userId: "15d0fdf1-a589-4144-8703-77eafedd574b",
      name: "Task 4: Low Priority",
      description: null,
      priority: 3,
      completed: false,
      dueAt: null
    },
    {
      id: "3eeb92c3-5167-4519-8d28-500c69a5ee2c",
      userId: "15d0fdf1-a589-4144-8703-77eafedd574b",
      name: "Task 4: Medium Priority",
      description: null,
      priority: 2,
      completed: false,
      dueAt: null
    },
    {
      id: "fb027f47-023a-4151-8009-99b9e9df735d",
      userId: "15d0fdf1-a589-4144-8703-77eafedd574b",
      name: "Task 4: Top Priority",
      description: null,
      priority: 1,
      completed: false,
      dueAt: null
    },
    {
      id: "aa59b8d6-e469-47cd-b392-bae4e35bf18c",
      userId: "15d0fdf1-a589-4144-8703-77eafedd574b",
      name: "Task 5",
      description: null,
      priority: 4,
      completed: true,
      dueAt: null
    },
    {
      id: "31c4a07a-584a-44f4-95e9-2c41ff579f8f",
      userId: "15d0fdf1-a589-4144-8703-77eafedd574b",
      name: "Task 6",
      description: "I've been completed",
      priority: 4,
      completed: true,
      dueAt: null
    }
  ]);
  await database.disconnect();
  console.log("Done!");
})();
