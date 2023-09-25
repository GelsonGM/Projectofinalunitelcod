$('#formulario').submit(function (e) {
    e.preventDefault();
    var quantidade = $("#quantidade").val();
    var tamanho = $("#tamanho").val();
    var cor = $("#cor").val();
    var local = $("#local").val();
    var cartao = $("#cartao").val();
    
    if (cartao==123456789) {
        alert("compra efetuada com sucesso")   
    }
    else{
        alert("Número de Cartão inválido")
    }
 })