/* Arrays */
// São indexados por elementos e começa do 0 em diante

const alunos = ['Luiz', 'Maria', 'João'] // Luiza, Eduardo

alunos.push('Luiza')
alunos.push('Luiza')

//console.log(typeof alunos)
//***Que tipo é a variável

//console.log(alunos instanceof Array)
//***Para saber se a variavel é uma instancia de array

//console.log(alunos.slice(0,3))
//***Maneira de fatiar o Array

//delete alunos[1]
//***Elimina o elemento especifico

//const removido = alunos.pop()
//***Remove o ultimo elemento

//const removido = alunos.shift()
//***Remove o primeiro elemento alterando o indice.

//console.log(removido)
//console.log(alunos)

// ***** Maneiras de adicionar elementos no começo do Arrays *****

// alunos.unshift('Luiza')
// alunos.unshift('Fábio')

// ******** Maneiras para adicionar um elemento no fim ********
//alunos.push('Luiza')
//alunos.push('Fábio')

//alunos[alunos.length] = 'Luiza'
//alunos[alunos.length] = 'Fábio'
//alunos[alunos.length] = 'Luana'

//alunos[0] = 'Eduardo'    ***** Altera *****
//alunos[3] = 'Luiza'     ***** Adicionando *****

// console.log(alunos)
// console.log(alunos[0])
// console.log(alunos[2])
