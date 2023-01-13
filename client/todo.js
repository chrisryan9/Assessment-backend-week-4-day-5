const addBtn = document.getElementById('addbutton');


const createItem = (event) => {
    event.preventDefault();
    let inputField = document.querySelector('input');
    let item = inputField.value;
    inputField.value = "";
    axios.post('http://localhost:4000/api/todo', { item } )
        .then(res => {
            const data = res.data;
            console.log(data);
            const ul = document.querySelector('ul');
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);


            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'x';
            deleteBtn.addEventListener('click', deleteMovie);
            li.appendChild(deleteBtn);
        })
        .catch(error => {
            console.log(error);
        });
};


const itemList = document.getElementById('listofItems');


const deleteMovie = (event) => {
    itemList.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`;
    
    revealMessage();

    event.target.parentNode.remove();

    setTimeout(() => { 
        itemList.textContent = "";
    }, 2000);
};

const revealMessage = () => {

    setTimeout(() => {
    }, 5200)
}

addBtn.addEventListener('click', createItem);