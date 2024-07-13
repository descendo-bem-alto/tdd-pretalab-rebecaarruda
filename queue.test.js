const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()

    const queue = new Queue()

    expect(queue).toEqual({ elements: []})

  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue();
    expect(queue.getSize()).toBe(0);

    queue.enqueue(1);
    expect(queue.getSize()).toBe(1);

    queue.enqueue(2);
    expect(queue.getSize()).toBe(2);

    queue.dequeue();
    expect(queue.getSize()).toBe(1);

    queue.dequeue();
    expect(queue.getSize()).toBe(0);

  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.elements).toEqual([1]);
    expect(queue.getSize()).toBe(1);
  })

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
  })

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.dequeue()).toBe(1);
    expect(queue.elements).toEqual([2]);
    expect(queue.getSize()).toBe(1);
  })
})