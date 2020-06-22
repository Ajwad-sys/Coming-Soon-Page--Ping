function validate () {
  const doc = document.getElementById('error-message')
  const email = document.getElementById('email')
  const emailValue = email.value

  if (!emailValue) {
    doc.innerText = 'Please provide a valid email address'
    doc.style.display('none')
  } else if (!validateEmail(emailValue)) {
    doc.innerText = 'Please provide a valid email address'
    doc.style.display('none')
  }

  function validateEmail (email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }
}
