const botaoPesquisa = document.querySelector('#btnPesquisar')

botaoPesquisa.addEventListener('click', (e)=> {
  const cep = document.querySelector('#cep')
  const cepValue = cep.value
  
  // a api ja entende o sinal, nao precisa retirar 
  // cepValue.replace('-', '')

  fetch(`https://viacep.com.br/ws/${cepValue}/json`)
  .then( response => {response.json()
    .then(data => {campos(data)})
  })

})

const campos = (data) => {
  const rua = document.querySelector('#rua')
  const bairro = document.querySelector('#bairro')
  const cidade = document.querySelector('#cidade')
  const estado = document.querySelector('#estado')

  rua.value = data.logradouro
  bairro.value = data.bairro
  cidade.value = data.localidade
  estado.value = data.uf
}
