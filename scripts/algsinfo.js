var selCases = [];

var algsGroups = {
    "Easy" : [1],
    "Horse" : [2,3,4,5,6,7],
    "Hover" : [],
    "Tower" : [],
    "Up" : [],
    "Down" : []
};

var algsInfo = {
    1: {
        "name": "Done",
        "a": "U (R U' R')",
        "a2": "",
    },
    2: {
        "name": "Insert",
        "a": "R U R'",
        "a2": "",
    },
    3: {
        "name": "Zamboni",
        "a": "U'(R U R' U) (R U R')",
        "a2": "",
    },
    4: {
        "name": "Zamboni",
        "a": "R' U2' R2 U R2' U R",
        "a2": "",
    },
    5: {
        "name": "Zamboni",
        "a": "U' (R U' R' U) (R U R')",
        "a2": "",
    },
    6: {
        "name": "Zamboni",
        "a": "(U' R U R') U2(R U' R')",
        "a2": "",
    },
    7: {
        "name": "Zamboni",
        "a": "U' (R U2' R') U2(R U' R')",
        "a2": "",
    },
    8: {
        "name": "Zamboni",
        "a": "U (R U2 R') U (R U' R')",
        "a2": "",
    },
    9: {
        "name": "Zamboni",
        "a": "U2 (R U R' U)(RU' R')",
        "a2": "",
    },
    10: {
        "name": "Zamboni",
        "a": "(R  U R')  U2  (R  U'  R' U)(R  U'  R')",
        "a2": "",
    },
    11: {
        "name": "Zamboni",
        "a": "(R U2 R') U' (R U R')",
        "a2": "",
    },
    12: {
        "name": "Zamboni",
        "a": "U (R  U' R'  U')  (R  U'  R'  U) (R  U'  R')",
        "a2": "",
    },
    13: {
        "name": "Zamboni",
        "a": "U'F'(R U R'U') R'F R",
        "a2": "",
    },
    14: {
        "name": "Zamboni",
        "a": "(R U' R' U)(R U' R')",
        "a2": "",
    },
    15: {
        "name": "Zamboni",
        "a": "(U  R  U' R') (U  R  U'  R') (U  R  U'  R')",
        "a2": "",
    },
    16: {
        "name": "Zamboni",
        "a": "(U' R U'R') U2(R U' R')",
        "a2": "",
    },
    17: {
        "name": "Zamboni",
        "a": "U (R U R') U2 (R U R')",
        "a2": "",
    },
    18: {
        "name": "Zamboni",
        "a": "(R U' R' U') R UR' U2(R U' R')",
        "a2": "",
    },
    19: {
        "name": "Zamboni",
        "a": "(R U' R' U) (R U2' R') U (R U' R')",
        "a2": "",
    },
};
