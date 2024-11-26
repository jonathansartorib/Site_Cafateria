async function loginUser(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verificar se os campos estão preenchidos
    if (!email || !password) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    try {
        // Enviar a requisição para verificar as credenciais
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        // Se a resposta for ok, login bem-sucedido
        if (response.ok) {
            alert('Login bem-sucedido!');
            // Redirecionar para a página principal ou remover o overlay de login
            window.location.href = "index.html";  // Ou mostrar o conteúdo principal da aplicação
        } else {
            const errorData = await response.json();
            alert(`Erro: ${errorData.message || 'Credenciais incorretas'}`);
        }
    } catch (error) {
        console.error('Erro ao realizar o login:', error);
        alert('Erro ao se conectar ao servidor.');
    }
}

// Associar a função de login ao botão de submit
document.querySelector('form').addEventListener('submit', loginUser);
