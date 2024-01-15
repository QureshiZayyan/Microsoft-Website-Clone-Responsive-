{
    const ham = document.querySelector('.ham');
    const ul1 = document.querySelector('.ul1');
    const ul2 = document.querySelector('.ul2');

    ham.addEventListener('click', () => {

        ham.classList.toggle('open');
        ul1.classList.toggle('open');
        ul2.classList.toggle('open');
    })
}

const input = document.createElement('input');
const button = document.createElement('button');
button.classList.add('bt1');
const ul2 = document.querySelector('.ul2');
const search = document.querySelector('.search');
search.addEventListener('click', () => {
    button.innerHTML = 'X';
    ul2.append(input);
    ul2.append(button);
})

button.addEventListener('click', () => {
    input.remove();
    button.remove();
})