document.getElementById('form-receita').addEventListener('submit', function(e) {
    e.preventDefault();

    const valor = document.getElementById('valor').value;
    const descricao = document.getElementById('descricao').value;
    const data = document.getElementById('data').value;

    const novaDespesa = document.createElement('li');
    novaDespesa.textContent = `${data} - ${descricao}: R$ ${valor}`;

    document.getElementById('lista-despesas').appendChild(novaDespesa);

    document.getElementById('valor').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('data').value = '';
});