let contasClientes = []

const cadastrarConta = (evento) => {
    evento.preventDefault()
  
    if (confirmaSenhas(evento)) {
      const conta = {
        nome: evento.target.nome.value,
        cpf: evento.target.cpf.value,
        celular: evento.target.celular.value,
        senha: evento.target.senha.value,
        conta: Math.floor(1000 + Math.random() * 90000),
        saldo: 0,
      }
  
      contasClientes.push(conta);
      alert(`Conta criada! Número: ${conta.conta}`)
    } else {
      alert('Senhas diferentes')
    }
  }

const confirmaSenhas = (evento) => {
if(evento.target.senha.value == evento.target.confirmacao.value)
    return true
return false
}

const form = document.getElementById('form')
form.addEventListener('submit', cadastrarConta)