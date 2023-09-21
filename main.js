document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("meuFormulario");
    const campoA = document.getElementById("campoA");
    const campoB = document.getElementById("campoB");
    const mensagem = document.getElementById("mensagem");

    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        const valorA = parseFloat(campoA.value);
        const valorB = parseFloat(campoB.value);

        if (isNaN(valorA) || isNaN(valorB)) {
            mensagem.textContent = "Por favor, insira números válidos em ambos os campos.";
            mensagem.style.color = "red";
        } else if (valorB > valorA) {
            mensagem.textContent = "Formulário válido. O número B é maior que o número A.";
            mensagem.style.color = "green";
        } else {
            mensagem.textContent = "Formulário inválido. O número B deve ser maior que o número A.";
            mensagem.style.color = "red";
        }
    });
});