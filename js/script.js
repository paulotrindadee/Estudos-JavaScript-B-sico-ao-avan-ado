function meuEscopo() {
  const form = document.querySelector('.form')
  const resultado = document.querySelector('.resultado')

  const pessoas = []

  function recebeEventoForm(evento) {
    evento.preventDefault()

    const nome = form.querySelector('.nome')
    const sobrenome = form.querySelector('.sobrenome')
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')

    // ******Forma de pegar o objeto e enviar para a arrays*****
    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    })

    // Aqui é onde dá um console no array
    console.log(pessoas)

    resultado.innerHTML +=
      `<p>${nome.value}${sobrenome.value}` + `${peso.value} ${altura.value}</p>`
  }

  form.addEventListener('submit', recebeEventoForm)
}

meuEscopo()
