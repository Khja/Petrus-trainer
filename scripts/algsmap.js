var ollMap = {
  1: [
    "U' L F2 U' R U R L' U R2 L2 D R2 D' L2 U' R2",
    "U L F2 U' R U R L' U R2 L2 D R2 D' L2 U' R2",
    "U2 L F2 U' R U R L' U R2 L2 D R2 D' L2 U' R2"
  ],
  2: [
    "B' U2 B L2 F2 L2 U2 F U2 F' U2 F L D' L2 D L F2",
    "U' B' U2 B L2 F2 L2 U2 F U2 F' U2 F L D' L2 D L F2",
    "U B' U2 B L2 F2 L2 U2 F U2 F' U2 F L D' L2 D L F2",
    "U2 B' U2 B L2 F2 L2 U2 F U2 F' U2 F L D' L2 D L F2",
  ],
  3: [
    "L U F2 L F2 L2 U R' U2 R' U2 R U2 B2 R2 B2 U2",
    "U' L U F2 L F2 L2 U R' U2 R' U2 R U2 B2 R2 B2 U2",
    "U L U F2 L F2 L2 U R' U2 R' U2 R U2 B2 R2 B2 U2",
    "U2 L U F2 L F2 L2 U R' U2 R' U2 R U2 B2 R2 B2 U2",
  ],
  4: [
    "R2 B2 L' D L' D' L2 B2 R2",
    "B' U' R U R' B U F2 R2 F L2 F' R2 F L2 F",
    "U' R2 B2 L' D L' D' L2 B2 R2",
    "U' B' U' R U R' B U F2 R2 F L2 F' R2 F L2 F",
  ],
  5: [
    "F2 R2 L2 D' L' D R U2 L' U2 R F2 L' B2 L B2 U2",
    "U' F2 R2 L2 D' L' D R U2 L' U2 R F2 L' B2 L B2 U2",
    "U F2 R2 L2 D' L' D R U2 L' U2 R F2 L' B2 L B2 U2",
    "U2 F2 R2 L2 D' L' D R U2 L' U2 R F2 L' B2 L B2 U2",
  ],
  6: [
    "L U2 R2 D2 L' D2 L D2 L' D2 R2 U' R U' L R' U",
    "U' L U2 R2 D2 L' D2 L D2 L' D2 R2 U' R U' L R' U",
    "U L U2 R2 D2 L' D2 L D2 L' D2 R2 U' R U' L R' U",
    "U2 L U2 R2 D2 L' D2 L D2 L' D2 R2 U' R U' L R' U",
  ],
  7: [
    "R' U2 R' U2 R' U' F2 R2 L2 U F2 D' F2 B2 L2 D",
    "U' R' U2 R' U2 R' U' F2 R2 L2 U F2 D' F2 B2 L2 D",
    "U R' U2 R' U2 R' U' F2 R2 L2 U F2 D' F2 B2 L2 D",
    "U2 R' U2 R' U2 R' U' F2 R2 L2 U F2 D' F2 B2 L2 D",
  ],
  8: [
    "D2 B2 D2 R' D R' U F2 L2 D' L2 F2 R2 U B2 D'",
    "U' D2 B2 D2 R' D R' U F2 L2 D' L2 F2 R2 U B2 D'",
    "U D2 B2 D2 R' D R' U F2 L2 D' L2 F2 R2 U B2 D'",
    "U2 D2 B2 D2 R' D R' U F2 L2 D' L2 F2 R2 U B2 D'",
  ],
  9: [
    "B2 R B' U2 B R F R2 F' R2 B2 R2 U2 F' U2 F U2",
    "U' B2 R B' U2 B R F R2 F' R2 B2 R2 U2 F' U2 F U2",
    "U B2 R B' U2 B R F R2 F' R2 B2 R2 U2 F' U2 F U2",
    "U2 B2 R B' U2 B R F R2 F' R2 B2 R2 U2 F' U2 F U2",
  ],
  10: [
    "B L F2 L F L2 F D2 F2 D2 B' L2 F' L2 F",
    "U' B L F2 L F L2 F D2 F2 D2 B' L2 F' L2 F",
    "U B L F2 L F L2 F D2 F2 D2 B' L2 F' L2 F",
    "U2 B L F2 L F L2 F D2 F2 D2 B' L2 F' L2 F",
  ],
  11: [
    "R' U2 R' U2 R F2 R2 F L2 B' D2 B L2 F",
    "U' R' U2 R' U2 R F2 R2 F L2 B' D2 B L2 F",
    "U R' U2 R' U2 R F2 R2 F L2 B' D2 B L2 F",
    "U2 R' U2 R' U2 R F2 R2 F L2 B' D2 B L2 F",
  ],
  12: [
    "R2 U2 F2 R D R' D' L2 B2 D' B2 D B2 D' L2 F2 U'",
    "U' R2 U2 F2 R D R' D' L2 B2 D' B2 D B2 D' L2 F2 U'",
    "U R2 U2 F2 R D R' D' L2 B2 D' B2 D B2 D' L2 F2 U'",
    "U2 R2 U2 F2 R D R' D' L2 B2 D' B2 D B2 D' L2 F2 U'",
  ],
  13: [
    "F2 U' L D' L D B2 R2 D R2 B2 L2 U2 F2",
    "U F2 U' L D' L D B2 R2 D R2 B2 L2 U2 F2",
    "U' F2 U' L D' L D B2 R2 D R2 B2 L2 U2 F2",
    "U2 F2 U' L D' L D B2 R2 D R2 B2 L2 U2 F2",
  ],
  14: [
    "L U2 L' U R U L' B2 L B2 U2 R' U2",
    "U' L U2 L' U R U L' B2 L B2 U2 R' U2",
    "U2 L U2 L' U R U L' B2 L B2 U2 R' U2",
    "U' L U2 L' U R U L' B2 L B2 U2 R' U2",
  ],
  15: [
    "R' B2 U2 R U2 L' B2 L2 R' U2 R2 U R U2 L' R'",
    "U R' B2 U2 R U2 L' B2 L2 R' U2 R2 U R U2 L' R'",
    "U' R' B2 U2 R U2 L' B2 L2 R' U2 R2 U R U2 L' R'",
    "U2 R' B2 U2 R U2 L' B2 L2 R' U2 R2 U R U2 L' R'",
  ],
  16: [
    "L' U2 L F2 R2 B2 R F2 R2 U B2 U' R B2 R2 U'",
    "U L' U2 L F2 R2 B2 R F2 R2 U B2 U' R B2 R2 U'",
    "U' L' U2 L F2 R2 B2 R F2 R2 U B2 U' R B2 R2 U'",
    "U' B D2 B' U F R2 F' R2 U2 B D2 B2 R2 B R2 U2",
  ],
  17: [
    "U2 L' U2 L F2 R2 B2 R F2 R2 U B2 U' R B2 R2 U'",
    "B' R F2 R' B' D2 R' D2 B2 U2 R2 F2 R2 L' U2 R F2",
    "U2 L2 B2 L R2 B2 R U2 R U' L2 D F2 D' L'",
  ],
  18: [
    "F2 L F2 L' U2 F2 R' F2 R U'",
    "U' F2 L F2 L' U2 F2 R' F2 R U'",
    "U F2 L F2 L' U2 F2 R' F2 R U'",
    "U2 F2 L F2 L' U2 F2 R' F2 R U'",
  ],
  19: [
    "B F2 L2 F L2 U2 B' R2 D' F D R2 F U",
  ],
  20: [
    "U2 F D' B2 D F' U' F2 L2 D' B2 L2 B2 L2 D F2",
  ]
};
