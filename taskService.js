import { Task } from "./task";
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
    const lista = [];
    return this.tasks.filter((task) => !task.completed);
  }

  getCompletedTasks() {
    const lista = [];
    return this.tasks.filter((task) => task.completed);
  }
}
