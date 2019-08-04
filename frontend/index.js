const deleteTodo = id => {
  fetch(`http://localhost:4000/api/v1/todos/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(response => response)
    .catch(e => e);
  window.location = "/frontend/index.html";
};

const getTodoToUpdate = async (id) => {
  document.getElementById("add-button").style.display = 'none'
  const apply = document.getElementById("apply-button");
  apply.style.display = 'inline';
  const response = await fetch(`http://localhost:4000/api/v1/todos/${id}`, {
      method: "GET"
    })
    .then(res => res.json())
    .then(response => response)
    .catch(e => e);
  // const completed = document.getElementById("input").value;
  document.getElementById("text").value = response.todo[0].name;
  document.getElementById("text").addEventListener('blur', (e) => {
    value = e.target.value;
    const body = {
      name: value,
      // completed: completed
    }

    apply.addEventListener("click", () => {
      fetch(`http://localhost:4000/api/v1/todos/${id}`, {
          method: "PUT",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(res => res.json())
        .then(response => response)
        .catch(e => e);
      window.location = "/frontend/index.html";
    });
  })
}

async function fetchAllTodos() {
  try {
    //get response from the API
    const response = await fetch("http://localhost:4000/api/v1/todos", {
        method: "GET"
      })
      .then(res => res.json())
      .then(response => response)
      .catch(e => e);

    let todoList = document.querySelector(".todo-list");
    if (response == "No todos") {
      return (todoList.textContent = response);
    }
    response.todos.forEach(todo => {
      todoList.innerHTML += `
      <div class="todo" id=${todo.id}>
      <input type="checkbox" class="check" id="input"/>
      <p>${todo.name } </p>
      <button class="update" onClick=getTodoToUpdate(${todo.id})>Edit</button>
      <span class='delete' onClick=deleteTodo(${todo.id})>X</span>
     </div>`;
    });

  } catch (e) {
    console.log(e);
  }
}

fetchAllTodos();

document.getElementById("add-button").addEventListener("click", () => {
  const value = document.getElementById("text").value;
  const body = {
    name: value
  };
  fetch(`http://localhost:4000/api/v1/todos`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(response => response)
    .catch(e => e);
  window.location = "/frontend/index.html";
});