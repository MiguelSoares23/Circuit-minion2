// Recupera os usuários do localStorage (ou cria um array vazio se não houver dados)
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// Função para salvar os dados
function salvarUsuario() {
    let email = document.querySelector("input[type='text']").value;
    let senha = document.querySelector("input[type='password']").value;

    if (email && senha) {
        // Adiciona os dados ao array
        usuarios.push({ email, senha });

        // Salva no localStorage
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Usuário cadastrado com sucesso!");

        // Limpa os campos
        document.querySelector("input[type='text']").value = "";
        document.querySelector("input[type='password']").value = "";

        console.log("Usuários cadastrados:", usuarios); // Mostra os usuários salvos no console
    } else {
        alert("Preencha todos os campos!");
    }
}
