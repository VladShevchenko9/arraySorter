import {ArraySorter} from './src/ArraySorter'

const objects: Record<string, number | string>[] = [
    {
        name: 'Alex',
        age: 13,
    },
    {
        name: 'John',
        age: 21,
    },
    {
        name: 'Billy',
        age: 20,
    }
];

const arraySorter = new ArraySorter();
const objectsSortedByName = arraySorter.setArray(objects).setSortBy('name').setDescendingDirection().quickSort();
console.log('Sorted by name using quick sort method');
console.log(objectsSortedByName);

const objectsSortedByAge = arraySorter.setSortBy('age').setAscendingDirection().mergeSort();
console.log('Sorted by age using merge sort method');
console.log(objectsSortedByAge);
