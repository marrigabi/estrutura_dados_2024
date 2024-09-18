class UndoSystem {
    constructor() {
      this.stack = [];
    }
  
    addOperation(operation) {
      this.stack.push(operation);
    }
  
    undo() {
      if (this.stack.length === 0) return null;
      return this.stack.pop();
    }
  }
  