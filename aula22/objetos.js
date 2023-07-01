// function criarPessoa(nome, sobrenome, idade) {
//   return { nome, sobrenome, idade }
// }

// const pessoa1 = criarPessoa('Luiz', 'Miranda', 25)
// const pessoa2 = criarPessoa('Maria', 'Oliveira', 32)
// const pessoa3 = criarPessoa('Guilherme', 'Trindade', 55)
// const pessoa4 = criarPessoa('Paulo', 'Zachariadhes', 44)
// const pessoa5 = criarPessoa('Jéssica', 'Rocha', 69)

// console.log(pessoa3.nome, pessoa3.sobrenome)
// console.log(pessoa4.nome, pessoa4.sobrenome)
// console.log(pessoa5.nome, pessoa5.sobrenome)

const pessoa = {
  nome: 'Paulo',
  sobrenome: 'Trindade',
  idade: 33,

  fala() {
    console.log(`${this.nome} ${this.sobrenome} está falando oi....`)
  }
}

pessoa.fala()
