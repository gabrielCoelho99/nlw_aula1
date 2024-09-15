// olá, mundo!
console.log("olá, mundo!")


// variáveis - let
let mensagens = "olá, mundo!"


// variáveis - const
const mensagem = "olá, eu"
{
    const mensagem = "olá, Gabriel!"
    console.log(mensagem)
}
console.log(mensagem);


// arrays
let metas = ['Gabriel', 'alô']
let metas01 = [2, 'Gabriel']
// concatenando valores
console.log(metas[1] + ", " + metas[0]) 

let metas02 = [
    metas,
    {
        value: 'caminhar 20 minutos todos os dias',
        checked: false
    }
]
console.log(metas02[1].value);

// objetos
let meta = {
    value: 'ler um livro por mês',
    address: 2,
    checked: true,
    isChecked: () => {
        console.log(info)
    }
}
console.log(meta.value);

// function // arrow function
const criarMeta = () => {};

// named function
function criarMetas() {};