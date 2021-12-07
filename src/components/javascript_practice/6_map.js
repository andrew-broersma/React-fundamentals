const instructors = [
    {name: 'Quincy', specialty: 'Quantam Mechanics'},
    {name: 'Kenn', specialty: 'Norse Mythology'},
    {name: 'Carolyn', specialty: 'Kung Fu'},
    {name: 'Paul', specialty: 'Entomology'},
    ];

let instructor_names = [];

instructors.forEach(instructor => {
    instructor_names.push(instructor.name);
});

const instructorNames = instructors.map(instructor => instructor.name);
console.log(instructorNames)

// Same thing as the one above this
const instructorNamesTwo = instructors.map(i => i.name);
console.log(instructorNamesTwo);

const instructorInfo = instructors.map(i => `${i.name}: ${i.specialty}`);
console.log(instructorInfo)

// .map() thing someone did for an interview
let kvArray =[
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}
];
console.log(kvArray);

let reformattedArray = kvArray.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value;
    return(console.log(rObj))
});
console.log(reformattedArray) //not really doing anything