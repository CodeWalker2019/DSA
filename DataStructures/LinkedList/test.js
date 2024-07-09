const assert = require("assert");
const LinkedList = require("./implementation");

(function testAdd() {
    let list = new LinkedList();
    list.add(10);
    const first = list.getFirst();
    assert.strictEqual(first.value, 10);
    list.add(20);
    const second = first.next;
    assert.strictEqual(second.value, 20);
    list.add(30);
    const third = second.next;
    assert.strictEqual(third.value, 30);
    console.log('Test add passed!');
})();

(function testAddAtIndex() {
    let list = new LinkedList();
    list.add(10);
    list.add(20);
    list.addByIndex(1, 15);
    assert.strictEqual(list.get(1).value, 15);
    assert.strictEqual(list.get(2).value, 20);
    console.log('Test add at index passed!');
})();

(function testSet() {
    let list = new LinkedList();
    list.add(10);
    list.add(20);
    list.set(1, 25);
    assert.strictEqual(list.get(1).value, 25);
    console.log('Test set passed!');
})();

(function testGet() {
    let list = new LinkedList();
    list.add(10);
    list.add(20);
    assert.strictEqual(list.get(0).value, 10);
    assert.strictEqual(list.get(1).value, 20);
    console.log('Test get passed!');
})();

(function testGetFirst() {
    let list = new LinkedList();
    list.add(10);
    list.add(20);
    assert.strictEqual(list.getFirst().value, 10);
    console.log('Test get first passed!');
})();

(function testGetLast() {
    let list = new LinkedList();
    list.add(10);
    list.add(20);
    assert.strictEqual(list.getLast().value, 20);
    console.log('Test get last passed!');
})();

(function testRemove() {
    let list = new LinkedList();
    list.add(10);
    list.add(20);
    list.add(30);
    assert.strictEqual(list.remove(1).value, 20);
    assert.strictEqual(list.get(1).value, 30);
    console.log('Test remove passed!');
})();

(function testContains() {
    let list = new LinkedList();
    list.add(10);
    list.add(20);
    assert.strictEqual(list.contains(20), true);
    assert.strictEqual(list.contains(30), false);
    console.log('Test contains passed!');
})();

(function testIsEmpty() {
    let list = new LinkedList();
    assert.strictEqual(list.isEmpty(), true);
    list.add(10);
    assert.strictEqual(list.isEmpty(), false);
    console.log('Test is empty passed!');
})();

(function testSize() {
    let list = new LinkedList();
    list.add(10);
    list.add(20);
    assert.strictEqual(list.size(), 2);
    console.log('Test size passed!');
})();

(function testClear() {
    let list = new LinkedList();
    list.add(10);
    list.add(20);
    list.clear();
    assert.strictEqual(list.isEmpty(), true);
    console.log('Test clear passed!');
})();

console.log('All tests passed!');
