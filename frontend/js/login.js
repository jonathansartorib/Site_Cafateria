const loginSection = document.getElementById('login');
const mainSection = document.getElementById('main');


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
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            alert('Login bem-sucedido!');

             // Esconde a seção de login e exibe a seção principal
             loginSection.style.display = 'none';
             mainSection.style.display = 'flex';
            
        } else {
            const errorData = await response.json();
            alert(`Erro: ${errorData.message || 'Credenciais incorretas'}`);
        }
    } catch (error) {
        console.error('Erro ao realizar o login:', error);
        alert('Erro ao se conectar ao servidor.');
    }
}



