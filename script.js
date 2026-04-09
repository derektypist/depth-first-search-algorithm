function dfs(graph, root) {
  const n = graph.length;
  let visited = Array(n).fill(false);
  let result = [];
  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    if (!visited[node]) {
      visited[node] = true;
      result.push(node);
      for (let neighbor=0;neighbor<n;neighbor++) {
        if (graph[node][neighbor] === 1 && !visited[neighbor]) stack.push(neighbor)
      }
    }
  }
  return result;
}

console.log(dfs([[0,1,0,0],[1,0,1,0],[0,1,0,1],[0,0,1,0]],1));
console.log(dfs([[0,1,0,0],[1,0,1,0],[0,1,0,1],[0,0,1,0]],3));
console.log(dfs([[0,1,0,0],[1,0,1,0],[0,1,0,0],[0,0,0,0]],3));
console.log(dfs([[0,1,0,0],[1,0,0,0],[0,0,0,1],[0,0,1,0]],3));
console.log(dfs([[0,1,0,0],[1,0,0,0],[0,0,0,1],[0,0,1,0]],0));
