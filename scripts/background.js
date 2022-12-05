function fetchBg(){fetch(`https://api.unsplash.com/photos/random?client_id=oEV7i3CGZp79T6S7V-bGCZr6Vh3D5HyjwF0bBlkdJK8&orientation=landscape`)
.then(response => response.json())
.then( response => {
    console.log(response.urls.regular);
    localStorage.setItem('background', response.urls.full )
    renderBg();
})};

function renderBg(){
    let bg = localStorage.getItem('background');
    document.body.style.backgroundImage = `url('${bg}') `;
}
let nextBg = document.getElementById('nextBg').addEventListener('click', fetchBg );

renderBg();