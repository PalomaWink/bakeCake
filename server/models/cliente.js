// src/model/cliente.js

class Cliente {
  constructor(name, observacao) {
    this.name = name;
    this.observacao = observacao;
  }

  static clientes = [];

  static getAllClientes() {
    return Cliente.clientes;
  }

  static findClienteByName(name) {
    return Cliente.clientes.find(cliente => cliente.name === name);
  }

  static addCliente(cliente) {
    Cliente.clientes.push(cliente);
  }

  static updateCliente(name, newObservacao, newName) {
    const cliente = Cliente.findClienteByName(name);
    if (cliente) {
      cliente.observacao = newObservacao;
      cliente.name = newName;
    }
  }

  static deleteCliente(name) {
    Cliente.clientes = Cliente.clientes.filter(cliente => cliente.name !== name);
  }
}

export default Cliente;