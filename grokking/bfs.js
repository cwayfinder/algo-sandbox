function search(graph, from, predicate) {
  const queue = [...graph[from]];
  const searched = [];

  while (queue.length) {
    const item = queue.shift();
    if (!searched.includes(item)) {
      if (predicate(item)) {
        return item;
      } else {
        queue.push(...graph[item]);
        searched.push(item);
      }
    }
  }
}

const graph = {
  you: ['alice', 'bob', 'claire'],
  bob: ['anuj', 'peggy'],
  alice: ['peggy'],
  claire: ['thom', 'jonny'],
  anuj: [],
  peggy: [],
  thom: [],
  jonny: [],
};

const isMangoSeller = name => name.endsWith('m');
console.log(search(graph, 'you', isMangoSeller));
