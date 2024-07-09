class Node {
    #next = null;
    #value;

    constructor(value) {
        this.#value = value;
    }

    get value() { return this.#value; }
    set value(value) { this.#value = value; }

    get next() { return this.#next; }
    set next(next) { this.#next = next; }
}

class LinkedList {
    #head = null;
    #tail = null;
    #length = 0;

    constructor(value) {
        if (!value) return;

        this.#head = new Node(value);
        this.#tail = this.#head;
        this.#length = 1;
    }

    /**
    * Adds an element to the end of the list.
    *
    * @param element element to add
    */
    add(element) {
        const node = new Node(element);

        if (this.#length === 0) {
            this.#tail = node;
            this.#head = this.#tail;
        } else {
            this.#tail.next = node;
            this.#tail = node;
        }

        this.#length++;

        return true;
    }

    /**
     * Adds a new element to the specific position in the list. In case provided index in out of the list bounds
     * it returns false
     *
     * @param index   an index of new element
     * @param element element to add
     */
    addByIndex(index, element) {
        if (index >= this.#length || index < 0) return false;

        const node = new Node(element);

        if (this.#length === 0) {
            this.#head = node;
            this.#tail = node;
        } else {
            const prevNode= this.get(index - 1);
            const temp = prevNode.next;
            node.next = temp;
            prevNode.next = node;
        }

        this.#length++;

        return true
    }
    
    /**
    * Changes the value of an list element at specific position. In case provided index in out of the list bounds it
    * returns false
    *
    * @param index   an position of element to change
    * @param element a new element value
    */
    set(index, element) {
        if (index >= this.#length || index < 0) return false;

        const node = this.get(index);
        node.value = element;

        return true;
    }

    *#iterate(node= this.#head, index = 0) {
        while (node) {
            yield [node, index];
            node = node.next;
            index += 1;
        }
    }
    
    /**
    * Retrieves an elements by its position index. In case provided index in out of the list bounds it
    * returns undefined
    *
    * @param index element index
    * @return an element value
    */
    get(index) {
        if (index >= this.#length || index < 0) return undefined;

        for (const [node, i] of this.#iterate()) {
            if (i === index) return node;
        }
    }
    
    /**
    * Returns the first element of the list. Operation is performed in constant time O(1)
    *
    * @return the first element of the list
    */
    getFirst() { return this.#head; }
    
    /**
    * Returns the last element of the list. Operation is performed in constant time O(1)
    *
    * @return the last element of the list
    */
    getLast() { return this.#tail; }
    
    /**
    * Removes an elements by its position index. In case provided index in out of the list bounds it
    * returns undefined
    *
    * @param index element index
    * @return deleted element
    */
    remove(index) {
        if (index >= this.#length || index < 0) return undefined;
        if (index === this.#length - 1) this.getLast();
        if (index === 0) this.getFirst();

        const prevNode = this.get(index - 1);
        const temp = prevNode.next;
        prevNode.next = temp.next;
        this.#length--;

        return temp;
    }
    
    
    /**
    * Checks if a specific element exists in the list
    *
    * @return true if element exist, false otherwise
    */
    contains(element) {
        for (const [node] of this.#iterate()) {
            if (node.value === element) return true;
        }

        return false;
    }
    
    /**
    * Checks if a list is empty
    *
    * @return true if list is empty, false otherwise
    */
    isEmpty() { return this.#length === 0; }
    
    /**
    * Returns the number of elements in the list
    *
    * @return number of elements
    */
    size() { return this.#length; }
    
    /**
    * Removes all list elements
    */
    clear() {
        this.#length = 0;
        this.#tail = null;
        this.#head = null;
    }
}

module.exports = LinkedList;
