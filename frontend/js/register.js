async function registerUser(event) {

    event.preventDefault(); // Impede o envio do formulário

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
        const response = await fetch('https://site-cafateria.onrender.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password, dob }),
        });
        if (response.ok) {
            alert('Usuário cadastrado com sucesso!');
            window.location.href = "../index.html"
        } else {

            const errorData = await response.json();
            alert(`Erro: ${errorData.message || 'Tente novamente mais tarde.'}`);
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao se conectar ao servidor.');
    }
}
