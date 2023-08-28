function clicar() {
    var nome = document.getElementById('escrever');
    var res = document.getElementById('res');

    if(nome.value.length == 0) {
        window.alert('Digite uma palavra!.')
    } else {
        var n = nome.value
        res.innerHTML = `O nome digitado é ${n}`
    }
}