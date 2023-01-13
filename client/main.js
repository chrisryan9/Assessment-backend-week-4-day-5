const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById('fortuneCookie');
const movieList = document.getElementById('favMovies');

const responseSection = document.getElementsByClassName('response-area');

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const collectFortune = () => {
    axios.get('http://localhost:4000/api/fortune/')
        .then(res => {
            const data = res.data;
            alert(data);
        });
};


function addToView() {
    axios.get('http://localhost:4000/api/movies/')
        .then(res => {
            const dataArr = res.data;
            if(!dataArr || !dataArr.length) return alert("Response came back with no results!");
            const ul = document.querySelector('.response-area ul');
            for (let i = 0; i < dataArr.length; i++) {
                let item = dataArr[i];
                const li = document.createElement('li');
                const t = document.createTextNode(item)
                li.appendChild(t);
                ul.appendChild(li);
            }
        })
        .catch(error => {
            console.log(error);
        });
};

movieList.addEventListener('click', addToView);

fortuneBtn.addEventListener('click', collectFortune);

complimentBtn.addEventListener('click', getCompliment);
