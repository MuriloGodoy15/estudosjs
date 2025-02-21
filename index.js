class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

    cliente1.nome = "Ricardo";
    cliente1.cpf = 11122233309;
    cliente1.agencia = 1001;
    cliente1.saldo = 0;
    
    cliente2.nome = "Alice";
    cliente2.cpf = 11122233310;
    cliente2.agencia = 1001;
    cliente2.saldo = 0;


if (cliente1.agencia == 1001){
    console.log("pinto");
} else {
    console.log("não pinto");
}

console.log(cliente1, cliente2);