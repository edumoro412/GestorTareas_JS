import { TaskService } from "./taskService";
import { Task } from "./task";

const TaskServices = new TaskService();

taskServices.addTask(
  "Recoger la habitación",
  "Tender la cama, tirar la basura",
  Date()
);

taskServices.addTask(
  "Recoger la cocina",
  "Fregar los cacharros, tirar la basura",
  Date()
);

taskServices.addTask("Ir a clase", "Pillar el autobús", Date());
taskServices.addTask("Hacer los deberes", "Actualizar el windows", Date());
taskServices.addTask("Paja", "Tender la cama, tirar la basura", Date());

console.log(TaskServices.getCompletedTasks());
TaskServices.completeTask(2);

TaskServices.addTask("Gg", "nada", Date());

TaskServices.removeTask(2);
console.log(TaskServices.getPendingTask());
