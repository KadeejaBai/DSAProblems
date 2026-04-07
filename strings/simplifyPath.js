/*
Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in
a Unix-style file system, convert it to the simplified canonical path.

In a Unix-style file system, a period '.' refers to the current directory, a double period '..' refers
to the directory up a level, and any multiple consecutive slashes (i.e. '//') are treated as a single slash '/'.

The canonical path should have the following format:
- Begins with a single slash '/'.
- Directories separated by a single slash '/'.
- Not end with trailing '/'.
- Only contains the directories on the path (no '.' or '..').

Example 1:
Input: path = "/home/"
Output: "/home"

Example 2:
Input: path = "/../"
Output: "/"

Example 3:
Input: path = "/home//foo/"
Output: "/home/foo"

Constraints:
    1 <= path.length <= 3000
    path consists of English letters, digits, period '.', slash '/' or '_'.
    path is a valid absolute Unix path.
*/

/**
 * @param {string} path
 * @return {string}
 */
function simplifyPath(path) {
    const parts = path.split('/');
    const stack = [];

    for (const part of parts) {
        if (part === '' || part === '.') continue;
        if (part === '..') {
            if (stack.length > 0) stack.pop();
        } else {
            stack.push(part);
        }
    }
    return '/' + stack.join('/');
}

// Example usage:
console.log(simplifyPath("/home/"));        // Output: "/home"
console.log(simplifyPath("/../"));          // Output: "/"
console.log(simplifyPath("/home//foo/"));   // Output: "/home/foo"
