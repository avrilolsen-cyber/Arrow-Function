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


const numeros = [1, 2, 3, 4];

const duplicados = numeros.map((n) => n * 2)

console.log(duplicados)

const nomes = [ "ana", "isa", "murilo", "Agustin"];

const maiusculos = nomes.map((n) => n.toUpperCase())

console.log(maiusculos)

const produtos = [
  { id: 1, nome: "Caderno", preco: 15 },
  { id: 2, nome: "Caneta", preco: 3 },
  { id: 3, nome: "Mochila", preco: 120 },
];

const lista = produtos.map((l) => l.nome )

console.log(lista)


const num = [1, 2, 3, 4, 5, 6];

const pares = num.filter((n) => n % 2 === 0)
console.log(pares)

const notas = [5, 8, 6.5, 9, 7];

console.log(notas.filter((n) => n >= 7))
 

const produtos2 = [
  { id: 1, nome: "Caderno", preco: 15 },
  { id: 2, nome: "Caneta", preco: 3 },
  { id: 3, nome: "Mochila", preco: 120 },
];

const menor = produtos2
.filter((m) => m.preco < 50)
.map((m) => m.nome);

console.log(menor)