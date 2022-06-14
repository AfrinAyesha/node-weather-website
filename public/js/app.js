console.log('Client side javscript file is loaded!')






const weatherForm = document.querySelector('form');
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const img = document.querySelector('#weather-icon')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value;
    console.log('testing', location)
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    img.src = ''
    fetch(`/weather?address=${location}`).then((response) => {
    response.json().then(data => {
        if (data.error) {
            messageOne.textContent = data.error;
            console.log(data.error)
        } else {
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast;
            img.src = data.icon;
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})
})