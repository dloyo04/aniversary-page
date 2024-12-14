// Archivo: count.js

// Función para calcular y actualizar el contador
function actualizarContador() {
    // Fecha de inicio
    const startDate = new Date("2023-12-15"); // Cambia esta fecha según sea necesario
    // Fecha actual
    const today = new Date();

    // Cálculo de años, meses y días
    let years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();
    let days = today.getDate() - startDate.getDate();

    // Ajustar días negativos
    if (days < 0) {
        months -= 1;
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += previousMonth.getDate();
    }

    // Ajustar meses negativos
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    // Actualizar el contenido del contador
    const result = `${years} años, ${months} meses y ${days} días `;
    document.getElementById("contador").textContent = result;
}

// Inicializar el contador al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    actualizarContador();
    // Actualizar cada día a medianoche
    setInterval(actualizarContador, 24 * 60 * 60 * 1000); // Actualizar cada 24 horas
});
