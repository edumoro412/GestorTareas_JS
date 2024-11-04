import { TaskService } from "./taskService";

new Task(
  1,
  "Recoger la habitacion",
  "Tender la cama, tirar la basura",
  Date(),
  false
);

new Task(
  2,
  "Recoger la cocina",
  "Fregar los cacharros, tirar la basura",
  Date(),
  false
);

new Task(3, "Ir a clase", "Pillar el autobus", Date(), false);

new Task(4, "Hacer los deberes", "Actualizar el windows", Date(), false);

new Task(5, "Paja", "Tender la cama, tirar la basura", Date(), false);

const TaskServices = new TaskService();

console.log(TaskServices.getCompletedTasks());

TaskServices.addTask("Gg", "nada", Date());

TaskServices.removeTask(2);
console.log(TaskServices.getPendingTask());
