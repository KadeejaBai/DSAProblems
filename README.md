# DSAProblems

A curated collection of Data Structures and Algorithms problems solved in **JavaScript**, organized by topic and ideal for technical interview preparation.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
![Language](https://img.shields.io/badge/language-JavaScript-f7df1e)
![Problems](https://img.shields.io/badge/problems-124%2B-brightgreen)

## Overview

Each folder corresponds to a DSA topic and contains standalone `.js` files, one problem per file. Solutions are written for clarity and aim to highlight the underlying pattern (sliding window, two pointers, BFS/DFS, dynamic programming, etc.) rather than micro-optimizations.

## Topics

| Topic | Folder | Problems |
| --- | --- | --- |
| Arrays | [`arrays/`](./arrays) | 32 |
| Strings | [`strings/`](./strings) | 8 |
| Linked Lists | [`linked-lists/`](./linked-lists) | 14 |
| Stacks & Queues | [`stacks-queues/`](./stacks-queues) | 12 |
| Binary Trees | [`binary-trees/`](./binary-trees) | 15 |
| Binary Search Trees | [`bst/`](./bst) | 6 |
| Binary Search | [`binary-search/`](./binary-search) | 3 |
| Heap / Priority Queue | [`heap/`](./heap) | 4 |
| Graphs | [`graphs/`](./graphs) | 4 |
| Intervals | [`intervals/`](./intervals) | 4 |
| Greedy | [`greedy/`](./greedy) | 4 |
| Backtracking | [`backtracking/`](./backtracking) | 3 |
| Dynamic Programming | [`dynamic-programming/`](./dynamic-programming) | 11 |
| Bit Manipulation | [`bit-manipulation/`](./bit-manipulation) | 4 |

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later recommended)

### Clone the repo
```bash
git clone https://github.com/KadeejaBai/DSAProblems.git
cd DSAProblems
```

### Run a solution
Each file is self-contained. Add a few sample calls at the bottom of the file and run it directly with Node:
```bash
node arrays/twoSum.js
```

### Lint
This project uses ESLint. Install dev dependencies and run the linter:
```bash
npm install
npx eslint .
```

## Repository Structure

```
DSAProblems/
├── arrays/
├── backtracking/
├── binary-search/
├── binary-trees/
├── bit-manipulation/
├── bst/
├── dynamic-programming/
├── graphs/
├── greedy/
├── heap/
├── intervals/
├── linked-lists/
├── stacks-queues/
└── strings/
```

## Contributing

Contributions are welcome. If you'd like to add a new problem or improve an existing solution:

1. Fork the repository.
2. Create a new branch (`git checkout -b feat/problem-name`).
3. Add your solution under the appropriate topic folder, using `camelCase.js` naming consistent with existing files.
4. Include a brief problem description and complexity analysis as a comment at the top of the file.
5. Open a pull request.

## License

This project is licensed under the [MIT License](./LICENSE).
