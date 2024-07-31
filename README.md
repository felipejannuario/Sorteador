Claro! Vou detalhar cada componente do projeto de sorteador, incluindo as tecnologias e ferramentas utilizadas. O README será mais informativo, cobrindo todos os aspectos do projeto.

### README.md

```markdown
# Sorteador de Números

## Descrição

O projeto "Sorteador de Números" é uma aplicação web simples que permite ao usuário gerar um número aleatório dentro de um intervalo especificado. É uma excelente forma de praticar HTML, CSS e JavaScript, além de ser útil para diversas aplicações que necessitam de um sorteio de números.

## Tecnologias Utilizadas

### 1. **HTML**
- **Função**: Estrutura básica da página web.
- **Uso**: Define o layout do formulário de entrada, o botão de sorteio e a área onde o resultado será exibido.

### 2. **CSS**
- **Função**: Estilização da página web.
- **Uso**: Define o design visual da página, incluindo a disposição dos elementos, cores, fontes e espaçamentos. Utiliza propriedades modernas como `background-image` para adicionar imagens de fundo e `flexbox` para centralizar e alinhar elementos.

### 3. **JavaScript**
- **Função**: Lógica e interatividade.
- **Uso**: Manipula o DOM para atualizar o conteúdo da página com o número sorteado, e inclui a lógica para gerar números aleatórios dentro do intervalo definido pelo usuário.

## Estrutura do Projeto

- **`index.html`**: Arquivo HTML que define a estrutura da página.
- **`styles.css`**: Arquivo CSS que contém os estilos da página.
- **`script.js`**: Arquivo JavaScript que contém a lógica para gerar números aleatórios e manipular o DOM.

## Como Usar

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. **Acesse o diretório do projeto**:

   ```bash
   cd seu-repositorio
   ```

3. **Abra o arquivo `index.html` em seu navegador**.

4. **Insira os valores nos campos de "Número Mínimo" e "Número Máximo" e clique em "Sortear"**.

## Exemplo de Uso

1. Abra o arquivo `index.html` em seu navegador.
2. No campo "Número Mínimo", insira o valor desejado.
3. No campo "Número Máximo", insira o valor desejado.
4. Clique no botão "Sortear" para gerar um número aleatório dentro do intervalo especificado.
5. O número sorteado será exibido abaixo do botão.

## Código do Projeto

### `index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sorteador</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <img src="logo-image.png" alt="Logo" class="logo"> <!-- Imagem do logo -->
    <div class="container">
        <h1>Sorteador</h1>
        <form id="sorteio-form">
            <div class="form-group">
                <div>
                    <label for="min">Número Mínimo:</label>
                    <input type="number" id="min" value="1" min="0" required>
                </div>
                <div>
                    <label for="max">Número Máximo:</label>
                    <input type="number" id="max" value="10" min="1" required>
                </div>
            </div>
            <button type="submit" class="btn-sortear">Sortear</button>
            <div class="result">
                <p id="resultado">Clique em "Sortear" para gerar um número.</p>
            </div>
        </form>
    </div>
    <script src="script.js"></script> <!-- Conecta o JavaScript -->
</body>
</html>
```

### `styles.css`

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.logo {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 100px;
}

.container {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
}

h1 {
    margin-bottom: 20px;
}

.form-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.form-group div {
    margin: 0 10px;
}

input[type="number"] {
    width: 80px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

button.btn-sortear {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #ffffff;
    font-size: 16px;
    cursor: pointer;
}

button.btn-sortear:hover {
    background-color: #0056b3;
}

.result {
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
}
```

### `script.js`

```javascript
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
```

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Para contribuir:

1. Fork o repositório.
2. Crie uma branch para a sua feature (`git checkout -b minha-feature`).
3. Faça commit das suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Faça o push para a branch (`git push origin minha-feature`).
5. Abra um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Se você tiver dúvidas ou sugestões, sinta-se à vontade para me contatar:

- **Email**: felipejanuarioalves@outlook.com
- **LinkedIn**: [Felipe Januario](https://www.linkedin.com/in/felipe-januario)
```

### Notas Adicionais

- **Atualize** os URLs e informações de contato conforme necessário.
- **Inclua** o arquivo `LICENSE` no repositório se estiver usando uma licença específica.

Se precisar de mais detalhes ou ajustes, é só me avisar!
