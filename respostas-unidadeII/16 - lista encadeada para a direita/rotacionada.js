class LinkedList {
    rotacionarDireita(k) {
      if (!this.head || k <= 0) return;
  
      let length = 1;
      let tail = this.head;
  
      while (tail.next) {
        tail = tail.next;
        length++;
      }
  
      k = k % length;
      if (k === 0) return;
  
      tail.next = this.head;
  
      let newTail = this.head;
      for (let i = 1; i < length - k; i++) {
        newTail = newTail.next;
      }
  
      this.head = newTail.next;
      newTail.next = null;
    }
  }
  