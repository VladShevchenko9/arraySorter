# ArraySorter
This is a repository which contains a class named ArraySorter with various sorting methods, such as: 
- Quick sort (recursive)
- Merge sort (recursive)
- Selection sort
- Insertion sort

The class was created for sorting arrays of objects with `string` property names and `string` or `number` values.

Example of usage:
```
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
```
Expected output:
```
Sorted by name using quick sort method
[
  { name: 'John', age: 21 },
  { name: 'Billy', age: 20 },
  { name: 'Alex', age: 13 }
]
Sorted by age using merge sort method
[
  { name: 'Alex', age: 13 },
  { name: 'Billy', age: 20 },
  { name: 'John', age: 21 }
]
```
