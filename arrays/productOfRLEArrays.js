/*
We are given two Run-Length Encoded arrays encoded1 and encoded2 where encoded[i] = [vali, freqi].
The arrays decoded1 and decoded2 are the expansions of encoded1 and encoded2 respectively.
Find the product of decoded1 and decoded2.

Return the run-length encoding of the product array.

Example 1:
Input: encoded1 = [[1,3],[2,3]], encoded2 = [[6,3],[3,3]]
Output: [[6,3],[6,3]]
Explanation: encoded1 = [1,1,1,2,2,2], encoded2 = [6,6,6,3,3,3]
product = [6,6,6,6,6,6] = [[6,6]]

Example 2:
Input: encoded1 = [[1,3],[2,1],[3,2]], encoded2 = [[2,3],[3,3]]
Output: [[2,3],[6,1],[9,2]]

Constraints:
    1 <= encoded1.length, encoded2.length <= 10^5
    encoded1[i].length == 2
    1 <= vali, freqi <= 10^4
*/

/**
 * @param {number[][]} encoded1
 * @param {number[][]} encoded2
 * @return {number[][]}
 */
function findRLEArray(encoded1, encoded2) {
    const result = [];
    let i = 0, j = 0;

    while (i < encoded1.length && j < encoded2.length) {
        const [val1, freq1] = encoded1[i];
        const [val2, freq2] = encoded2[j];
        const product = val1 * val2;
        const minFreq = Math.min(freq1, freq2);

        if (result.length > 0 && result[result.length - 1][0] === product) {
            result[result.length - 1][1] += minFreq;
        } else {
            result.push([product, minFreq]);
        }

        encoded1[i][1] -= minFreq;
        encoded2[j][1] -= minFreq;
        if (encoded1[i][1] === 0) i++;
        if (encoded2[j][1] === 0) j++;
    }
    return result;
}

// Example usage:
const encoded1 = [[1, 3], [2, 3]];
const encoded2 = [[6, 3], [3, 3]];
console.log(findRLEArray(encoded1, encoded2)); // Output: [[6,3],[6,3]]
