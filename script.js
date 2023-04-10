const form=document.getElementById("form")
const mail=document.getElementById("email")
const error=document.getElementById("error")

form.addEventListener('submit', function(event) {
    event.preventDefault()
    const email=document.getElementById("email")

    if(!email.Value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        error.style.display='flex'
        error.innerHTML='chek your email please'
    }
    if(email.Value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        error.style.display='none'
        error.innerHTML=''
    }
})