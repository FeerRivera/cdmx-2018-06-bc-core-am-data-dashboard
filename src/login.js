// let data = document.forms["data"]
// button = document.getElementById("button")
// button.addEventListener("click", cuenta)

// function cuenta(log) {
//     log.preventDefault();
//     let user = data.querySelector('input[type="text"]')
//     let password = data.querySelector('input[type="password"]')
//     if (user.value === "lucile@laboratoria.la" && password.value === "123") {
//         window.location.href = "index.html"
//     } else {
//         alert("Ingresa una cuenta válida usuario: lucile@laboratoria.la contraseña:123")
//     }
// }

const btnentrar = document.getElementById('entrar');


const entrar = () => {
  const email1 = document.getElementById('email1').value;
  const password1 = document.getElementById('password1').value;
  localStorage.setItem('email1', email1);
  firebase.auth().signInWithEmailAndPassword(email1, password1)
    .then(function() {
      // promise.catch(console.log(e.message));
      window.location.href = 'index.html';
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      alert('Verifica tus datos');
      // ...
    });
};
btnentrar.addEventListener('click', entrar);