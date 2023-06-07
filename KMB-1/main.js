
const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

const getNames = (array) => {
    const result = []
    for (let i = 0; i < array.lenght; i++) {
        result.push(array[i].name)
    }
    return result;
}
console.log(getNames(students));

const getHello = (array) => {
    const result = []
    for (let i = 0; i < array.lenght; i++) {
        result.push(`HI,${array[i].name}!`)
    }
    return result;
}

// CRUD => create  - read - update  - delete
// C => [...students,newStudent]
// R => arrObj.map(obj => JSX.Element)
// U => arrObj.map(obj => condiiton ? {...obj,prop: newValue}: obj)
// D => arrObj.filter(obj = > condition)



const myConcat = (array_1, param) => {
    if (Array.isArray(param) === true) {
        return [...array_1, ...param]
    } else {
        return [...array_1, param]
    }
    const result = [...array_1]
}
console.log(myConcat([1, 2, 3, 4], [5, 3, 2, 2]));


const myReverse = (array) => {
    for (let i = 0; i < array.length; i++) {
       let temp = 
    }
}
