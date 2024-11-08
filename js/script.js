// Función para añadir la animación de entrada y salida de la página
function pageTransition() {
  document.body.classList.add('fade-out');
  setTimeout(function() {
    window.location.href = window.location.href; // Recarga la página actual
  }, 500); // Tiempo de transición
}

// Activar la transición cuando se haga clic en un enlace de navegación
document.querySelectorAll('nav a').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Prevenir la navegación inmediata
    pageTransition();
  });
});

// Efecto de máquina de escribir para varios textos en el índice
const texts = [
  "Una experiencia moderna e interactiva para todos los usuarios.",
  "Navega y descubre más.",
  "Explora nuestras increíbles características.",
  "Conoce nuestro equipo de desarrollo.",
  "¡Únete a la revolución digital!"
];

let currentText = 0;
let currentChar = 0;
const textElement = document.getElementById("typed-paragraph");

function typeWriter() {
  if (currentChar < texts[currentText].length) {
    textElement.innerHTML += texts[currentText].charAt(currentChar);
    currentChar++;
    setTimeout(typeWriter, 100); // Velocidad de la máquina de escribir
  } else {
    // Después de que un texto termine de escribirse, pasa al siguiente
    currentText = (currentText + 1) % texts.length;
    currentChar = 0;
    setTimeout(() => {
      textElement.innerHTML = ""; // Limpia el texto para escribir el siguiente
      typeWriter();
    }, 1500); // Espera 1.5 segundos antes de empezar a escribir el siguiente texto
  }
}

// Iniciar el efecto de máquina de escribir al cargar la página
window.onload = typeWriter;
