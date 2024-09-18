class LinkedList {
    intercalarNosListas(otherList) {
      let newList = new LinkedList();
      let node1 = this.head;
      let node2 = otherList.head;
  
      while (node1 || node2) {
        if (node1) {
          newList.add(node1.value);
          node1 = node1.next;
        }
        if (node2) {
          newList.add(node2.value);
          node2 = node2.next;
        }
      }
      return newList;
    }
  }
  