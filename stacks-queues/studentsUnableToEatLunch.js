/*
The school cafeteria offers circular and square sandwiches at lunch break. Students stand in a queue.
Each student either prefers square or circular sandwiches. The number of sandwiches equals the number of students.
They start to eat. Repeat: if the student at the front of queue prefers the sandwich on top of the stack,
they take it and leave; otherwise, they go to the end of the queue.
This continues until none of the queue students want the top sandwich.

Return the number of students unable to eat.

Example 1:
Input: students = [1,1,0,0], sandwiches = [0,1,0,1]
Output: 0

Example 2:
Input: students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]
Output: 3

Constraints:
    1 <= students.length == sandwiches.length <= 100
    0 <= students[i], sandwiches[i] <= 1
*/

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
function countStudents(students, sandwiches) {
    let count0 = students.filter(s => s === 0).length;
    let count1 = students.length - count0;

    for (const sandwich of sandwiches) {
        if (sandwich === 0) {
            if (count0 === 0) return count1;
            count0--;
        } else {
            if (count1 === 0) return count0;
            count1--;
        }
    }
    return 0;
}

// Example usage:
console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]));       // Output: 0
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])); // Output: 3
