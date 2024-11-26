
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para fins de validação
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Mensagem enviada com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});
