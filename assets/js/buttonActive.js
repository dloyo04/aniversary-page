document.addEventListener('DOMContentLoaded', () => {
    let isActive = false;  // Variable que cambia su valor al hacer clic
  
    const button = document.getElementById('myButton');
    
    button.addEventListener('click', () => {
      isActive = !isActive;  // Cambia el valor de isActive entre true y false
  
      // Cambia el estilo del botón dependiendo del valor de isActive
      if (isActive) {
        button.classList.add('active');  // Agrega la clase 'active' al botón
      } else {
        button.classList.remove('active');  // Elimina la clase 'active' del botón
      }
      
      // Cambia el estado de #history
      const history = document.getElementById('history');
      if (isActive) {
        history.classList.add('active');  // Muestra el historial
      } else {
        history.classList.remove('active');  // Oculta el historial
      }
    });
  });
  