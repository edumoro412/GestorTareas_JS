import Task from "./task";
class TaskService {
  constructor() {
    this.tasks = [];
    this.nexId = 1;
  }

  addTask() {
    const newTask = new Task(this.nexId++, title, description, dueDate);

    this.tasks.push(newTask);
    console.log(`Tarea añadida: ${newTask.title}`);
  }

  completeTask(id) {
    const task = this.tasks.find((tasks) => tasks.id == id);
    if (task) {
      tasks.completed = true;
      console.log(`La tarea ${task.title} ha sido terminada con exito`);
    }
  }

  removeTask(id) {
    const index = this.tasks.findIndex((tasks) => tasks.id == id);

    if (index !== -1) {
      console.log(`Tarea: ${tasks[index].title} ha sido eliminada`);
      this.tasks.splice(index, 1);
    }
  }

  getPendingTask() {
    for (let i = 0; i < tasks.length; i++) {
      if ((tasks[i].completed = false)) {
        console.log(`-${tasks[i].title}`);
      }
    }
  }

  getCompletedTasks() {
    for (let i = 0; i < tasks.length; i++) {
      if ((tasks[i].completed = true)) {
        console.log(`-${tasks[i].title}`);
      }
    }
  }
}
