class PriorityQueue {
    constructor() {
      this.queue = [];
    }
  
    enqueueWithPriority(element, priority) {
      this.queue.push({ element, priority });
      this.queue.sort((a, b) => b.priority - a.priority);
    }
  
    dequeue() {
      return this.queue.shift();
    }
  }
  