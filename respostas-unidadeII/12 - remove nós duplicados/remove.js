class LinkedList {
    removeTodosDuplicados() {
      let map = new Map();
      let prev = null;
      let current = this.head;
  
      while (current) {
        if (map.has(current.value)) {
          prev.next = current.next;
        } else {
          map.set(current.value, true);
          prev = current;
        }
        current = current.next;
      }
    }
  }
  