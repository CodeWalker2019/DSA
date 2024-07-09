class Node {
    /**
        Implement singly directed linked list Node class
     */
}

class LinkedList {
    /**
    * Adds an element to the end of the list.
    *
    * @param element element to add
    */
    add(element) {
        throw new Error('Not implemented');
    }

    /**
     * Adds a new element to the specific position in the list. In case provided index in out of the list bounds
     * it returns false
     *
     * @param index   an index of new element
     * @param element element to add
     */
    addByIndex(index, element) {
        throw new Error('Not implemented');
    }
    
    /**
    * Changes the value of an list element at specific position. In case provided index in out of the list bounds it
    * returns false
    *
    * @param index   an position of element to change
    * @param element a new element value
    */
    set(index, element) {
        throw new Error('Not implemented'); 
    }
    
    /**
    * Retrieves an elements by its position index. In case provided index in out of the list bounds it
    * returns undefined
    *
    * @param index element index
    * @return an element value
    */
    get(index) {
        throw new Error('Not implemented'); 
    }
    
    /**
    * Returns the first element of the list. Operation is performed in constant time O(1)
    *
    * @return the first element of the list
    */
    getFirst() {
        throw new Error('Not implemented'); 
    }
    
    /**
    * Returns the last element of the list. Operation is performed in constant time O(1)
    *
    * @return the last element of the list
    */
    getLast() {
        throw new Error('Not implemented'); 
    }
    
    /**
    * Removes an elements by its position index. In case provided index in out of the list bounds it
    * returns undefined
    *
    * @param index element index
    * @return deleted element
    */
    remove(index) {
        throw new Error('Not implemented'); 
    }
    
    
    /**
    * Checks if a specific element exists in the list
    *
    * @return true if element exist, false otherwise
    */
    contains(element) {
        throw new Error('Not implemented'); 
    }
    
    /**
    * Checks if a list is empty
    *
    * @return true if list is empty, false otherwise
    */
    isEmpty() {
        throw new Error('Not implemented'); 
    }
    
    /**
    * Returns the number of elements in the list
    *
    * @return number of elements
    */
    size() {
        throw new Error('Not implemented');
    }
    
    /**
    * Removes all list elements
    */
    clear() {
        throw new Error('Not implemented'); 
    }
}

module.exports = LinkedList;
