class LinkedList {
    combineImparPar() {
      if (!this.head || !this.head.next) return;
  
      let odd = this.head;
      let even = this.head.next;
      let evenHead = even;
  
      while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
      }
      odd.next = evenHead;
    }
  }
  