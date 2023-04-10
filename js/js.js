const sing_in_btn = document.querySelector("#sing-in-btn");
const sing_up_btn = document.querySelector("#sing-up-btn");
const container = document.querySelector(".container");

sing_up_btn.addEventListener('click', () => {
    container.classList.add("sing-up-mode");
});

sing_in_btn.addEventListener('click', () => {
    container.classList.remove("sing-up-mode");
});

const singForm = document.getElementById('sing-in-form');

singForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('regiNombreUsu');
    const password = document.getElementById('regiContra');
    const confirmPassword = document.getElementById('regiConfContr');
    const email = document.getElementById('regiEmail');  
    const phone = document.getElementById('regiNumeroTel');
    const storeName = document.getElementById('regiNomLocal');
    const category = document.getElementById ('categoria');

    // Validar cada campo
  if (!username) {
    alert('Por favor ingrese su nombre de usuario');
    return;
  }
  
  if (!password) {
    alert('Por favor ingrese una contraseña');
    return;
  }
  
  if (password !== confirmPassword) {
    alert('Las contraseñas no coinciden');
    return;
  }
  
  if (!email) {
    alert('Por favor ingrese su correo electrónico');
    return;
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor ingrese un correo electrónico válido');
      return;
    }
  }

  if (!phone) {
    alert('Por favor ingrese su número de teléfono');
    return;
  } else {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert('Por favor ingrese un número de teléfono válido (10 dígitos)');
      return;
    }
  }
  
  if (!storeName) {
    alert('Por favor ingrese el nombre de su tienda');
    return;
  }
  
  if (category === 'option0') {
    alert('Por favor seleccione una categoría');
    return;
  }
  
  // Si todos los campos son válidos, enviar el formulario
  alert('Formulario enviado correctamente');
  singForm.submit();
});

const loginForm =document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const usernameInput = document.getElementById('username-input');
    const passwordInput = document.getElementById('password-input');

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === '') {
        alert ('Por favor ingresa nombre de usuario.');
        return;
    }

    if(password === '') {
        alert('Por favor ingresa contraseña.');
        return;
    }

    loginForm.submit();
});

var swiper = new Swiper(".mySwiper", {
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

