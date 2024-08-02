document.getElementById('sorteio-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos inputs
    const min = parseInt(document.getElementById('min').value, 10);
    const max = parseInt(document.getElementById('max').value, 10);

    // Valida os valores
    const validationMessage = validateValues(min, max);
    if (validationMessage) {
        displayError(validationMessage);
        return;
    }

    // Gera o número aleatório e exibe o resultado
    const numeroSorteado = getRandomNumber(min, max);
    displayResult(`Número sorteado: ${numeroSorteado}`);
});

function validateValues(min, max) {
    if (isNaN(min) || isNaN(max)) {
        return { min: 'Por favor, insira números válidos.', max: 'Por favor, insira números válidos.' };
    }
    if (min >= max) {
        return { min: 'O número mínimo deve ser menor que o máximo.', max: '' };
    }
    return null;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayError(errors) {
    document.getElementById('min-error').textContent = errors.min;
    document.getElementById('max-error').textContent = errors.max;
}

function displayResult(message) {
    document.getElementById('resultado').textContent = message;
    document.getElementById('min-error').textContent = '';
    document.getElementById('max-error').textContent = '';
}
