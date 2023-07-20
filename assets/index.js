const btnEmail = document.getElementById('btnEmail')

btnEmail.addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        document.getElementById('emailError').style.display = 'none'
        document.getElementById('emailCorrect').style.display = 'block'
        document.getElementById('email').style.borderColor = 'hsl(120, 100%, 31%)'
        document.getElementById('email').value = ''

    } else {
        document.getElementById('emailCorrect').style.display = 'none'
        document.getElementById('emailError').style.display = 'block'
        document.getElementById('email').style.borderColor = 'hsl(354, 100%, 66%)'
        document.getElementById('email').value = ''
    }
})