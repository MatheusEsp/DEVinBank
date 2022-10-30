let contasClientes = []

const validarSenhasIguais = (evento) => {

  if (evento.target.senha.value == evento.target.confirmacao.value) {
    return true
  }
  return false
}

const cadastrarConta = (evento) => {
  evento.preventDefault()
  if (validarSenhasIguais(evento)) {
    const conta = {
      nome: evento.target.nome.value,
      cpf: evento.target.cpf.value,
      celular: evento.target.celular.value,
      senha: evento.target.senha.value,
      conta: Math.floor(1000 + Math.random() * 90000),
      saldo: 0,
    };
    contasClientes.push(conta)
    alert(`Conta criada! Número: ${conta.conta}`)
  } else {
    alert('Senhas não são iguais')
  }
}

const form = document.getElementById('form')
form.addEventListener('submit', cadastrarConta)


const trocarOperacao = (evento) => {
  const valor = document.getElementById('valor')
  valor.disabled = evento.target.value == 'SALDO'
};

const obterConta = (conta) => {
    const contaCliente = contasClientes.find((c) => c.conta === conta);
  
    return contaCliente;
  };


const saque = () => {}

const deposito = () => {}

const consultaSaldo = (conta) => {
    const contaCliente = obterConta(conta);

    alert(`Saldo atual: ${contaCliente.saldo}`);
};

const validaConta = (conta, senha) => {
    const contaCliente = obterConta(conta)
  return contaCliente && contaCliente.senha == senha ? true : false
}

const efetuarOperacao = (evento) => {
  evento.preventDefault()
  const conta = parseInt(evento.target.conta.value);
  const senha = evento.target.senha.value;

  const contaValida = validaConta(conta, senha);

  if (contaValida) {
    switch (evento.target.operacao.value) {
      case 'SAQUE':
        saque()
        break
      case 'DEPOSITO':
        deposito()
        break
      case 'SALDO':
        consultaSaldo()
        consultaSaldo(conta)
        break
      default:
        alert('Operação inválida')
    }
  } else {
    alert('Conta ou senha inválida')
  }
}

const operacao = document.getElementById('operacao')
operacao.addEventListener('change', trocarOperacao)

const formAcoes = document.getElementById('form-acoes')
formAcoes.addEventListener('submit', efetuarOperacao)