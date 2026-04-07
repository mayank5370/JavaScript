const todoList = [];

renderToDO();

function renderToDO() {
    let todoListHTML = '';
    
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const {name} = todoObject;
        const {dueDate} = todoObject;
        const html = `<p>
                    ${name} ${dueDate}
                    <button onclick = "
                        todoList.splice(${i}, 1);
                        renderToDO();
                    "> Delete </button> 
                    </p>`;
        todoListHTML += html;
    }
    console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
function addList() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const inputDate = document.querySelector('.js-date');
    const dueDate = inputDate.value;
    todoList.push({
        name,
        dueDate
    });
    console.log(todoList);

    inputElement.value = '';
    renderToDO();
}