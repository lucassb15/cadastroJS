
function cadCliente() {
    let nome = window.prompt('Nome: ');
    let sobrenome = window.prompt('Sobrenome: ');
    const idade = Number(window.prompt('Idade: '));
    let cidade = window.prompt('Cidade: ');
    let estado = window.prompt('Estado: ');
    let compra = Number(window.prompt('Produtos disponíveis para vendas\n 1 - Teclado\n 2 - Mouse\n 3 - Monitor\n 4 - Placa de video'));

    // Se idade for diferente de numero: exibe um alerta de erro e manda o usuario refazer o cadastro
    if (!idade) {
        alert('Erro ao cadastrar [ IDADE ] - Digite apenas numeros ! ');
        cadCliente();
    } else {
    // Se comprar receber alguns do valores abaixo e armazeno no consol.log o cliente
    if (compra==1){
        console.log("Cliente:",nome,sobrenome,"\nIdade:",idade,"Cidade:",cidade,"Estado:",estado,"Comprou: Teclado");
        
        novaOperacao();
    }else if(compra==2){
            console.log("Cliente:",nome,sobrenome,"\nIdade:",idade,"Cidade:",cidade,"Estado:",estado,"Comprou: Mouse");
            novaOperacao();
        }else if(compra==3){
            console.log("Cliente:",nome,sobrenome,"\nIdade:",idade,"Cidade:",cidade,"Estado:",estado,"Comprou: Monitor");
            novaOperacao();
        }else if(compra==4){
            console.log("Cliente:",nome,sobrenome,"\nIdade:",idade,"Cidade:",cidade,"Estado:",estado,"Comprou: Placa de video");
            novaOperacao();
        }else if (cadNovo==2)
        alert("Clientes cadastrado com sucesso");
    }

        // Função para continuar ou parar cadastro de funcionarios
        function novaOperacao() {
            let opcao = prompt('Deseja cadastrar outro cliente?\n 1 - Sim\n 2 - Não');
            if (opcao == 1) {
                cadCliente();
            } else if (opcao == 2) {
                alert(' \nClientes cadastrados no Banco de dados ! !\n');
                
            } else {
                alert('Digite uma opção válida !')
                novaOperacao();
            }
        }
    
      
    }cadCliente();
    

