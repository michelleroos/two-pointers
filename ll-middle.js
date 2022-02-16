/*
876. Middle of the Linked List Easy
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.
*/

// [1, 2, 3, 4, 5, 6]
//        s     f  n
var middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next; // 1 at a time
    fast = fast.next.next; // 2 at a time
  }
  // when fast is done, slow is 50% there
  return slow;
};

/*
Runtime: 87 ms, faster than 39.11% of JavaScript online submissions for Middle of the Linked List.
Memory Usage: 42.1 MB, less than 16.83% of JavaScript online submissions for Middle of the Linked List.
*/

const head1 = [1,2,3,4,5];
console.log(func(head1));
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.


const head1 = [1,2,3,4,5,6];
console.log(func(head1));
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
