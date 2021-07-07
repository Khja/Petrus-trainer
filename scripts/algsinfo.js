var selCases = [];

var algsGroups = {
    "A" : [1, 2, 3],
    "B" : [4, 5, 6],
    "C" : [7, 8, 9],
    "D" : [10, 11, 12],
    "E" : [13, 14, 15],
    "F" : [16, 17, 18],
    "G" : [19, 20],
};

var algsInfo = {
    1: {
        "name": "A1",
        "a": "U' (R U R' U) (R U R')",
        "a2": "",
    },
    2: {
        "name": "A2",
        "a": "U' (R U2' R') U2 (R U R')",
        "a2": "",
    },
    3: {
        "name": "A3",
        "a": "U2 (R U R' U) (R U' R')",
        "a2": "",
    },
    4: {
        "name": "B1",
        "a": "(R U R')",
        "a2": "",
    },
    5: {
        "name": "B2",
        "a": "(U' R U R') U2 (R U' R')",
        "a2": "",
    },
    6: {
        "name": "B3",
        "a": "U (R U2 R') U (R U' R')",
        "a2": "",
    },
    7: {
        "name": "C1",
        "a": "R' U2' R2 U R2' U R",
        "a2": "",
    },
    8: {
        "name": "C2",
        "a": "(R U R') U2 (R U' R') U (R U' R')",
        "a2": "",
    },
    9: {
        "name": "C3",
        "a": "(R U R') U2' (R U R') U' (R U  R')",
        "a2": "",
    },
    10: {
        "name": "D1",
        "a": "U' (R U R') U (R U R')",
        "a2": "",
    },
    11: {
        "name": "D2",
        "a": "U R U' R'",
        "a2": "",
    },
    12: {
        "name": "D3",
        "a": "(R U2 R') U' (R U R')",
        "a2": "",
    },
    13: {
        "name": "E1",
        "a": "U' F' (R U R' U') R' F R",
        "a2": "",
    },
    14: {
        "name": "E2",
        "a": "(R U' R') U (R U' R')",
        "a2": "",
    },
    15: {
        "name": "E3",
        "a": "(R U R' U') (R U R')",
        "a2": "",
    },
    16: {
        "name": "F1",
        "a": "U (R U R') U2 (R U R')",
        "a2": "",
    },
    17: {
        "name": "F2",
        "a": "(U' R U' R') U2 (R U' R')",
        "a2": "",
    },
    18: {
        "name": "F3",
        "a": "U R U' R' U R U' R' U R U' R'",
        "a2": "",
    },
    19: {
        "name": "G1",
        "a": "R U' R' U' R U R' U2 R U' R'",
        "a2": "",
    },
    20: {
        "name": "G2",
        "a": "R U' R' U R U2' R' U R U' R'",
        "a2": "",
    },

};
