class Queue {
  elements
  constructor(){
    this.elements = []
  }
  enqueue(element) {
    this.elements.push(element);
  }

  // Remove e retorna o elemento do início da fila
  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }
    return this.elements.shift();
  }

  // Verifica se a fila está vazia
  isEmpty() {
    return this.elements.length === 0;
  }

  // Retorna o tamanho da fila
  getSize() {
    return this.elements.length;
  }

  // Retorna o elemento na frente da fila sem removê-lo
  peek() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }
    return this.elements[0];
  }
}


module.exports = Queue