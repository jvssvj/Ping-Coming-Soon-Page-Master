function errorSucessEmail(inputId, inputBorderColor, idMessage, message, messageColor) {
    let input = document.querySelector(`${inputId}`)
    input.style.borderColor = `${inputBorderColor}`
    let spanMessage = document.querySelector(`${idMessage}`)
    spanMessage.textContent = `${message}`
    spanMessage.style.color = `${messageColor}`
}

document.querySelector('#ping--email').addEventListener('input', () => {
    if(document.querySelector('#ping--email').value == '') {
        errorSucessEmail('#ping--email', 'hsl(354, 100%, 66%)', '#error--sucess--email', 'Please provide a valid email address', 'hsl(354, 100%, 66%)')
    } else {
        errorSucessEmail('#ping--email', '', '#error--sucess--email', '', '')
    }
})

function checkEmail() {
    let pingEmail = document.querySelector('#ping--email').value
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    if(emailPattern.test(pingEmail)) {
        errorSucessEmail('#ping--email', 'hsl(120, 100%, 31%)', '#error--sucess--email', 'Email registered! You will be notified soon', 'hsl(120, 100%, 31%)')
        document.querySelector('#ping--email').value = ''
    } else {
        errorSucessEmail('#ping--email', 'hsl(354, 100%, 66%)', '#error--sucess--email', 'Please provide a valid email address', 'hsl(354, 100%, 66%)')
    }
}

document.querySelector('#send--btn').addEventListener('click', checkEmail)