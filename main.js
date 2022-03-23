const resDiv = document.querySelector('#advice');
const resBtn = document.querySelector('#getData');


resBtn.addEventListener('click', () => {
    getAdvice();
});

window.onload = () => {
    getAdvice();
};


function getAdvice() {

    fetch('https://api.adviceslip.com/advice').then(response => {
        return response.json();
    }).then(adviceData => {
    const Adviceobj = adviceData.slip;

    resDiv.innerHTML = `<div class="div-advice">
    <p style="color: hsl(151, 99%, 66%);padding-top: 2rem;padding-bottom: .5rem;font-size: 12px;" class="p-div2">Advice #${Adviceobj.id}</p>
    <p class="p-div">"${Adviceobj.advice}"</p>
    </div>`;
}).catch(error => {
    console.log(error);
});

}
