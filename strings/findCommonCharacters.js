/*
Given a string array words, return an array of all characters that show up in all strings within the words
(including duplicates). You may return the answer in any order.

Example 1:
Input: words = ["bella","label","roller"]
Output: ["e","l","l"]

Example 2:
Input: words = ["cool","lock","cook"]
Output: ["c","o"]

Constraints:
    1 <= words.length <= 100
    1 <= words[i].length <= 100
    words[i] consists of lowercase English letters.
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
function commonChars(words) {
    // Count character frequencies for the first word
    const minFreq = getFrequency(words[0]);

    // For each subsequent word, keep the minimum frequency
    for (let i = 1; i < words.length; i++) {
        const freq = getFrequency(words[i]);
        for (let c = 0; c < 26; c++) {
            minFreq[c] = Math.min(minFreq[c], freq[c]);
        }
    }

    const result = [];
    for (let c = 0; c < 26; c++) {
        for (let count = 0; count < minFreq[c]; count++) {
            result.push(String.fromCharCode(97 + c));
        }
    }
    return result;
}

function getFrequency(word) {
    const freq = new Array(26).fill(0);
    for (const ch of word) {
        freq[ch.charCodeAt(0) - 97]++;
    }
    return freq;
}

// Example usage:
const words = ["bella", "label", "roller"];
console.log(commonChars(words)); // Output: ["e","l","l"]
