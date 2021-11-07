function createTodo() {
    axios.get('http://api.bryanuniversity.edu/lisaMarieK/list')
        .then(response => {
            clearData();

            for (let i = 0; i < response.data.length; i++) {
                const p = document.createElement("p");
                p.textContent = response.data[i].name;

                let id = response.data[i]._id;

                var checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.name = "isCompleteBox";
                checkbox.value = "isCompleteBox";
                checkbox.id = "isComplete";
                checkbox.checked = response.data[i].isComplete;

                var deleteButton = document.createElement("button");
                deleteButton.innerHTML = "Delete";

                checkbox.onclick = function() {
                    axios.put('http://api.bryanuniversity.edu/lisaMarieK/list/' + id, {'isComplete': !response.data[i].isComplete})
                    .then(res => {
                        createTodo();
                    })
                    .catch(error => console.log(error));
                }

                deleteButton.onclick = function() {
                    axios.delete('http://api.bryanuniversity.edu/lisaMarieK/list/' + id)
                    .then(response => {
                        createTodo();
                    })
                    .catch(error => console.log(error));
                }

                p.appendChild(checkbox);
                p.appendChild(deleteButton);

                if (response.data[i].isComplete) {
                    checkbox.checked = true;
                    p.style.setProperty("text-decoration", "line-through");
                }
                const div = document.getElementById("wrapper");
                div.appendChild(p);
            }

            todoForm.name.value = '';
            todoForm.price.value = '';
            todoForm.description.value = '';
        })
        .catch(error => console.log(error));
}
createTodo();


function clearData() {
    const el = document.getElementById('wrapper');

    while (el.firstChild) {
        el.removeChild(el.firstChild)
    }
}

const todoForm = document.todoForm;

todoForm.addEventListener('submit', e => {
    e.preventDefault();

    const newTodo = {
        name: todoForm.name.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        isComplete: false
    }

    axios.post('http://api.bryanuniversity.edu/lisaMarieK/list', newTodo)
        .then(res => createTodo())
        .catch(err => console.log(err))

    
    const updates = {
        name: todoForm.name.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        isComplete: true
    }

    axios.put('http://api.bryanuniversity.edu/lisaMarieK/list', updates)
        .then(res => createTodo())
        .catch(err => console.log(err))
});