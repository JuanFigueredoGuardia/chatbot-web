// Referencias a los elementos del DOM
const messagesDiv = document.getElementById('messages');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');

// Respuestas predefinidas del bot
const respuestas = {
    "1": "Los horarios disponibles son de lunes a viernes de 08:00 a.m a 20:30 p.m.",
    "2": "Dias y Horarios del Aula:\r\n\r\nLunes a viernes de 08:00 a.m a 12:00 p.m.\r\n\r\nEl \"Espacio progresar UTN\" fue creada con el objetivo de acercar mejoras tecnológicas, asesoramientos en materia de conectividad, proporcionar el acceso a dispositivos digitales, sistemas de información y documentación a los estudiantes en situación de vulnerabilidad social y educativa.\r\nPara hacer una reserva del espacio con anticipación, los interesados pueden solicitar un turno de forma personal en el aula 20, o mediante un correo electrónico dirigido a espacioprogresar@frcon.un.edu.ar\r\nEn el cuerpo del mensaje se deberá indicar: Nombre completo, DNI, Dia y Horario en solicitar turno, celular y cantidad de máquinas a reservar.",
    "3": "Para brindarle ayuda comuníquese con el siguiente número que le dejamos al WhatsApp +54 9 345 494-5349.",
};

// Manejar el envío del formulario
chatForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar recargar la página

    const userMessage = userInput.value.trim(); // Obtener el mensaje del usuario
    if (userMessage === "") return; // No hacer nada si está vacío

    // Agregar el mensaje del usuario a la ventana de chat
    agregarMensaje('user', userMessage);

    // Procesar la respuesta del bot
    const botResponse = respuestas[userMessage] || "Lo siento, no entiendo esa opción. Por favor, elige un número del menú.";
    agregarMensaje('bot', botResponse);

    // Limpiar el campo de entrada
    userInput.value = "";
});

// Función para agregar mensajes al chat
function agregarMensaje(tipo, texto) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', tipo);
    messageDiv.textContent = texto;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Desplazar hacia abajo
}
