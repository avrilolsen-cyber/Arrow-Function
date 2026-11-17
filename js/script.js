//arrow Function

function saudacao(nome) {
    return "olá, " + nome;
} 

const saudacao1 = (nome) => "Olá, " + nome;

console.log(saudacao1("Murilo"))

    function soma(a, b) {
        return 2 + 3;
    }
    
    const Resultado = soma(2, 3);

    console.log(Resultado);
       
    
    const comDesconto = (preco) => preco - (preco * 0.10);
       
    console.log(comDesconto(100)); 

let idade = 20
const situacao1 = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(situacao1);
 

const statusNota = (nota) => (nota >= 7 ? "Aprovado" : "Reprovado");
   
console.log(statusNota(2));
console.log(statusNota(10));

const textoBotao = logado => logado ? "Sair" : "Entrar";
 
console.log(textoBotao(true));
console.log(textoBotao(false));