import { TaskService } from "./taskService";
import { Task } from "./task";

const TaskServices = new TaskService();

TaskServices.addTask(
  "Recoger la habitación",
  "Tender la cama, tirar la basura",
  Date()
);

TaskServices.addTask(
  "Recoger la cocina",
  "Fregar los cacharros, tirar la basura",
  Date()
);

TaskServices.addTask("Ir a clase", "Pillar el autobús", Date());
TaskServices.addTask("Hacer los deberes", "Actualizar el windows", Date());
TaskServices.addTask("Paja", "Tender la cama, tirar la basura", Date());

console.log(TaskServices.getCompletedTasks());
TaskServices.completeTask(2);

TaskServices.addTask("Gg", "nada", Date());

TaskServices.removeTask(2);
console.log(TaskServices.getPendingTasks());
