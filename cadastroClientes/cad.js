
function cadCliente() {
    let nome = window.prompt('Nome: ');
    let sobrenome = window.prompt('Sobrenome: ');
    const idade = Number(window.prompt('Idade: '));
    let cidade = window.prompt('Cidade: ');
    let estado = window.prompt('Estado: ');
    let compra = Number(window.prompt('Produtos disponíveis para vendas\n1 - Teclado\n 2 - Mouse\n 3 - Monitor\n 4 - Placa de video'));

    if (compra==1){
        console.log("Cliente:",nome,sobrenome,"\nIdade:",idade,"Cidade:",cidade,"Estado:",estado,"Comprou: Teclado");
        let cadNovo = Number(window.prompt('Deseja fazer outro cadastro?\n1 - Sim \n2 - Não '));
        if(cadNovo==1){
            cadCliente();
        }
    }else if(compra==2){
            console.log("Cliente:",nome,sobrenome,"\nIdade:",idade,"Cidade:",cidade,"Estado:",estado,"Comprou: Mouse");
            cadCliente();
        }else if(compra==3){
            console.log("Cliente:",nome,sobrenome,"\nIdade:",idade,"Cidade:",cidade,"Estado:",estado,"Comprou: Monitor");
            cadCliente();
        }else if(compra==4){
            console.log("Cliente:",nome,sobrenome,"\nIdade:",idade,"Cidade:",cidade,"Estado:",estado,"Comprou: Placa de video");
            cadCliente();
        }else if (cadNovo==2)
        alert("Clientes cadastrado com sucesso");
    }
    cadCliente();
