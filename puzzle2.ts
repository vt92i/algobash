
interface Child {
    gender: number;
    weight: number;
}

// Big O Notation: O(2n)
const findMinimum = (children: Child[]): number => {
    let result = 10_000;

    for (let i = 0; i < children.length; i++) {
        if (children[i].gender == 0) {
            for (let j = 0; j < children.length; j++) {
                if (children[j].gender == 1)
                    result = Math.abs(children[i].weight - children[j].weight) < result ? Math.abs(children[i].weight - children[j].weight) : result;
            }
        }
    }

    return result;
};

// Test Case 1
// const totalChildren = 5;
// const genders = [0, 0, 1, 0, 1];
// const weights = [1, 13, 9, 7, 15];
// Output : 2

// Test Case 2
// const totalChildren = 3;
// const genders = [0, 0, 1];
// const weights = [1, 2, 2];
// Output : 0

const children: Child[] = [
    {
        gender: 0,
        weight: 1
    },
    {
        gender: 0,
        weight: 13
    },
    {
        gender: 1,
        weight: 9
    },
    {
        gender: 0,
        weight: 7
    },
    {
        gender: 1,
        weight: 15
    }
];

const result = findMinimum(children);
console.log(result);
