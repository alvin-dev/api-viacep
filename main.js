const btnPesquisar = document.querySelector('#btnPesquisar')

const inputCep = document.querySelector('#cep');

// definindo uma const com o link da api e concatenando com o valor do cep usando o (template strings)

// request apos sair do campo do cep ou dar tab
inputCep.addEventListener("blur", (e)=>{
  let valueCep = inputCep.value
  var options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  }

  const url = `https://viacep.com.br/ws/${valueCep}/json`

  // pegando a API pelo fetch
  fetch(url, options)
    .then( response => {
      //converte para json
      response.json().then(data => atribuirCampos(data));
    })
    .catch(e => console.log('Deu erro'))

})


const atribuirCampos = (data) => {
  //pegar os campos
  const rua = document.querySelector('#rua')
  const bairro = document.querySelector('#bairro')
  const cidade = document.querySelector('#cidade')
  const estado = document.querySelector('#estado')

  // atribuir
  rua.value = data.logradouro
  bairro.value = data.bairro
  cidade.value = data.localidade
  estado.value = data.uf
}