class Fila {
    constructor() {
      this.queue = [];
    }
  
    compactarIntervalos() {
      let result = [];
      let start = this.queue[0];
      let end = start;
  
      for (let i = 1; i < this.queue.length; i++) {
        if (this.queue[i] === end + 1) {
          end = this.queue[i];
        } else {
          result.push(`${start}-${end}`);
          start = this.queue[i];
          end = start;
        }
      }
      result.push(`${start}-${end}`);
      return result;
    }
  }
  