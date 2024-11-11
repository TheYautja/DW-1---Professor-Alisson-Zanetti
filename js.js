function mostrarola(){
    let nome = document.getElementById("nome").value;

    document.getElementById("resposta").textContent = 'Olá $(nome)';
}