/*
There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to
its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

Return the starting gas station's index if you can travel around the circuit once, otherwise return -1.

Example 1:
Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3

Example 2:
Input: gas = [2,3,4], cost = [3,4,3]
Output: -1

Constraints:
    n == gas.length == cost.length
    1 <= n <= 10^5
    0 <= gas[i], cost[i] <= 10^4
*/

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
function canCompleteCircuit(gas, cost) {
    let totalGas = 0;
    let currentGas = 0;
    let startStation = 0;

    for (let i = 0; i < gas.length; i++) {
        const diff = gas[i] - cost[i];
        totalGas += diff;
        currentGas += diff;

        if (currentGas < 0) {
            startStation = i + 1;
            currentGas = 0;
        }
    }

    return totalGas >= 0 ? startStation : -1;
}

// Example usage:
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])); // Output: 3
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));              // Output: -1
