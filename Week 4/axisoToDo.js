function createTodo() {
    axios.get('http://api.bryanuniversity.edu/lisakozlowski/list')
        .then(response => {
            clearData();

            for (let i = 0; i < response.data.length; i++) {
                const p = document.createElement("p");
                p.textContent = response.data[i].name;
             //createTodo.appendChild(p);
    }
})
.catch(error => console.log(error))
}