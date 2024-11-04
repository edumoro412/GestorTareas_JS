import Task from "./task";
class TaskService {
  constructor() {
    this.tasks = [];
    this.nexId = 1;
  }

  addTask(title, description, dueDate) {
    const newTask = new Task(this.nexId++, title, description, dueDate);

    this.tasks.push(newTask);
    console.log(`Tarea añadida: ${newTask.title}`);
  }

  completeTask(id) {
    const task = this.tasks.find((tasks) => tasks.id == id);
    if (task) {
      task.completed = true;
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
      const lista = [];
      if ((tasks[i].completed = false)) {
        lista.push[tasks[i]];
      }
    }
  }

  getCompletedTasks() {
    const lista = [];
    for (let i = 0; i < tasks.length; i++) {
      if ((tasks[i].completed = true)) {
        lista.push[tasks[i]];
      }
    }
  }
}
