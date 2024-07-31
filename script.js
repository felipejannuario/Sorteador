document.getElementById('sorteio-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos inputs
    const min = parseInt(document.getElementById('min').value, 10);
    const max = parseInt(document.getElementById('max').value, 10);

    // Valida os valores
    const validationMessage = validateValues(min, max);
    if (validationMessage) {
        displayResult(validationMessage);
        return;
    }

    // Gera o número aleatório e exibe o resultado
    const numeroSorteado = getRandomNumber(min, max);
    displayResult(`Número sorteado: ${numeroSorteado}`);
});

function validateValues(min, max) {
    if (isNaN(min) || isNaN(max)) {
        return 'Por favor, insira números válidos.';
    }
    if (min >= max) {
        return 'O número mínimo deve ser menor que o máximo.';
    }
    return null;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayResult(message) {
    document.getElementById('resultado').textContent = message;
}
