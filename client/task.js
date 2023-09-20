const task = document.getElementById("task")

const tareas = [{
    tarea: "Sacar al perro",
    finalizada: true,
},
{
    tarea: "Comprar el mercado",
    finalizada: true,
},
{
    tarea: "Lavar la ropa",
    finalizada: false,
}]

/* tareas.forEach(element => {
    task.innerHTML += `<li>Tarea: ${element.tarea}</li>`
    console.log(element.tarea)
}) */

tareas.forEach(element => {
    if(element.finalizada){
        task.innerHTML += `<li>Tareas finalizadas: ${element.tarea}</li>`
    } else {
        task.innerHTML += `<li>Tareas Pendientes: ${element.tarea}</li>`
    }
    console.log(element.tarea)
})


