const todoList = [{
    name : 'wash dishes',
    date: "2025-02-02"
}, {
    name : 'make dinner',
    date: "2025-02-02"
}]

renderTodoList()

function renderTodoList() {
    let todoListHTML = ''

    for (let i = 0; i < todoList.length; i++) {
        const HTML = `
        <div>${todoList[i].name}</div>
        <div>${todoList[i].date}</div>
        <button class="delbtn" onclick="
        todoList.splice(${i},1)
        renderTodoList()
        ">Delete</button>`
        todoListHTML += HTML
    }

    console.log(todoListHTML)
    document.querySelector('div#container').innerHTML = todoListHTML
}


function addTodo() {
    const inputElement = document.querySelector("#name")
    const dateElement = document.querySelector("#date")
    const name = inputElement.value
    const date =  dateElement.value

    todoList.push({
        name,
        date
    })

    inputElement.value = ''
    dateElement.value = ''

    renderTodoList()
}