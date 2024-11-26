async function registerUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;

    // Verifique se todos os campos estão preenchidos
    if (!name || !email || !password || !dob) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password, dob }),
        });

        // Verifique se a resposta tem o status 201 (criado) ou não
        if (response.ok) {
            alert('Usuário cadastrado com sucesso!');
        } else {
            // Tente obter a resposta como JSON caso tenha erro
            const errorData = await response.json();
            alert(`Erro: ${errorData.message || 'Tente novamente mais tarde.'}`);
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao se conectar ao servidor.');
    }
}
