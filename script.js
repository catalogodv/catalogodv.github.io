function abrirWhatsApp(produto, preco) {
    var data = new Date();
    var horario = data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds();
  
    var mensagem = 'Pedido realizado às ' + horario + '\n';
    mensagem += 'Produto: ' + produto + '\n';
    mensagem += 'Preço: R$' + preco;
  
    var mensagemCodificada = encodeURIComponent(mensagem);
    var numeroWhatsApp = '+5532999767716'; // Substitua pelo seu número de telefone
  
    var url = 'https://api.whatsapp.com/send/?phone=5532999767716&text&type=phone_number&app_absent=0' + numeroWhatsApp + '&text=' + mensagemCodificada;
  
    window.open(url);
  }
  
