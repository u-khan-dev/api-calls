let fetchButton = document.querySelector('#btn');
let output = document.querySelector('#api-output');

fetchButton.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => { return res.json() })
    .then(data => {
        console.log(data);
        let firstOutput = data[85];
        output.innerText = JSON.stringify(firstOutput, undefined, 4);
    }).catch(err => {
        console.warn('Something went wrong.', err);
    });
});