let todoList = {
    names: [],
    dates: [],
    index: 0
}

const addbtn = document.querySelector("#addbtn")

addbtn.onclick = add

function add() {
    const todoName = document.querySelector("#name").value
    const date = document.querySelector("#date").value

    todoList.names.push(todoName)
    todoList.names.push(date)
    todoList.index++

    const p = document.querySelector("#todoList").innerText = `<p id="p${todoList.index}">${todoName} ${date} <button id="deletebtn${todoList.index}" onclick = "del(${todoList.index})">Delete</button></p>`
}

function del(index) {
    const p = document.querySelector("#todoList").innerHTML = null

}