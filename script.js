let container = document.querySelector('.container');
let blague = document.querySelector('.blague');
let btn = document.querySelector('#btn');
let personalite = document.querySelector('.personalite');

const body = document.body;
const lesBlagues = [{
    blague:`Tu demendes si on est sivilisés, vient voir KINA assi devant un mac en plus avec des casques 😂😂😂`,
    personalite:`-Abdourahamane`
},{
    blague:`On a donner une boisson sprite a un frère de KINA, il a dit c'est n'est pas mur il prend pas 😂🤣🤣`,
    personalite:`-Le Yatagan`
},{
    blague:`La france nous vole nos richesses et ils veulent nous volez nos jouers 😡😡 `,
    personalite:`-Adam`
},{
    blague:`Manger de la viande cru ca vous feras du bien...🫠`,
    personalite:`-Le Yatagan`
},{
    blague:`l'oiseau 🐦‍⬛ sur l'arbre ne dois jamais oublier qu'il a porté des lunette 🕶️ `,
    personalite:`-President BOBO`
}, ];

blague.style.color = 'white'

btn.addEventListener('click', function(){
    
    let random = Math.floor(Math.random() * lesBlagues.length);

    blague.innerText = lesBlagues[random].blague;
    personalite.innerText = lesBlagues[random].personalite;

});



// const footer = document.createElement('footer')
// footer.innerHTML = 'Quotes taken from Les crocodiles de BOSTWANGA Education Purpos Only - Copyright Président BOBO © 2023'
// body.appendChild(footer);