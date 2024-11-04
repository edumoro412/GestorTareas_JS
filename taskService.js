import { Task } from "./task";
export class TaskService {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }

  addTask(title, description, dueDate) {
    const dupli = this.tasks.find((task) => task.title === title);

    if (!dupli) {
      const newTask = new Task(
        this.nextId++,
        title,
        description,
        dueDate,
        false
      );
      this.tasks.push(newTask);
      console.log(`Tarea añadida: ${newTask.title}`);
    }
  }

  completeTask(id) {
    const task = this.tasks.find((tasks) => tasks.id == id);
    if (task) {
      task.completed = true;
      console.log(`La tarea ${task.title} ha sido terminada con exito`);
    } else {
      console.log("Esa tarea no existe!");
    }
  }

  removeTask(id) {
    const index = this.tasks.findIndex((tasks) => tasks.id == id);

    if (index !== -1) {
      console.log(`Tarea: ${this.tasks[index].title} ha sido eliminada`);
      this.tasks.splice(index, 1);
    } else {
      console.log("Esa tarea no existe");
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
