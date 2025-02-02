const todoList = [{
    name: 'wash dishes',
    date: "2025-02-02"
}, {
    name: 'make dinner',
    date: "2025-02-02"
}]

renderTodoList()

function renderTodoList() {
    let todoListHTML = ''

    todoList.forEach((value, index) => {
        const HTML = `
        <div>${value.name}</div>
        <div>${value.date}</div>
        <button class="delbtn"
        ">Delete</button>`
        todoListHTML += HTML
    })

    console.log(todoListHTML)
    document.querySelector('div#container').innerHTML = todoListHTML

    document.querySelectorAll(".delbtn")
        .forEach((value, index) => {
            value.addEventListener('click', () => {
                todoList.splice(index, 1)
                renderTodoList()
            })
        })

    
}

document.querySelector("#addbtn").addEventListener('click', addTodo)

function addTodo() {
    const inputElement = document.querySelector("#name")
    const dateElement = document.querySelector("#date")
    const name = inputElement.value
    const date = dateElement.value

    todoList.push({
        name,
        date
    })

    inputElement.value = ''
    dateElement.value = ''

    renderTodoList()
}