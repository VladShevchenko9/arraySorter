export class ArraySorter {
    readonly ascDir = 'ASC';
    readonly descDir = 'DESC';
    private sortDirection: 'ASC' | 'DESC' = this.ascDir;
    private arr: Record<string, number | string>[] = [];
    private sortBy: string = 'id';

    public setArray(arr: Record<string, number | string>[]): this {
        this.arr = [...arr];

        return this;
    }

    public setSortBy(sortBy: string): this {
        this.sortBy = sortBy;

        return this;
    }

    public setAscendingDirection(): this {
        this.sortDirection = this.ascDir;

        return this;
    }

    public setDescendingDirection(): this {
        this.sortDirection = this.descDir;

        return this;
    }

    public quickSort(
        startIndex: number = 0,
        endIndex: number = this.arr.length
    ): Record<string, number | string>[] {
        const arrayLength = endIndex - startIndex;

        if (arrayLength < 2) {
            return this.arr;
        }

        let temp: Record<string, number | string>;
        let j: number = startIndex - 1;

        for (let i = startIndex; i < endIndex; i++) {
            if (this.compareObjects(this.arr[endIndex - 1], this.arr[i])) {
                continue;
            }

            j++;

            if (i === j) {
                continue;
            }

            temp = this.arr[i];
            this.arr[i] = this.arr[j];
            this.arr[j] = temp;
        }

        this.quickSort(0, j);
        this.quickSort(j + 1, arrayLength);

        return this.arr;
    }

    public selectionSort(): Record<string, number | string>[] {
        let temp: Record<string, number | string>;

        for (let i = 0; i < this.arr.length - 1; i++) {
            let minOrMaxIndex = i;

            for (let j = i + 1; j < this.arr.length; j++) {
                if (this.compareObjects(this.arr[j], this.arr[minOrMaxIndex])) {
                    minOrMaxIndex = j;
                }
            }

            if (minOrMaxIndex !== i) {
                temp = this.arr[minOrMaxIndex];
                this.arr[minOrMaxIndex] = this.arr[i];
                this.arr[i] = temp;
            }
        }

        return this.arr;
    }

    public insertionSort(): Record<string, number | string>[] {
        let j: number;
        let currentElement: Record<string, number | string>;

        for (let i = 1; i < this.arr.length; i++) {
            currentElement = this.arr[i];
            j = i - 1;

            for (let k = i; j >= 0 && this.compareObjects(currentElement, this.arr[j]); j--, k--) {
                this.arr[k] = this.arr[j];
            }

            this.arr[j + 1] = currentElement;
        }

        return this.arr;
    }

    public mergeSort(arr: Record<string, string | number>[] = this.arr): Record<string, string | number>[] {
        if (arr.length < 2) {
            return arr;
        }

        const divideArr = ArraySorter.divideArr(arr);

        return this.mergeSortedArrays(
            this.mergeSort(divideArr.left),
            this.mergeSort(divideArr.right)
        );
    }

    private static divideArr(
        arr: Record<string, string | number>[]
    ): Record<'left' | 'right', Record<string, string | number>[]> {
        const midArr: number = Math.floor(arr.length / 2);
        let leftArr: Record<string, string | number>[] = [];
        let rightArr: Record<string, string | number>[] = [];

        for (let i = 0; i < arr.length; i++) {
            if (i < midArr) {
                leftArr.push(arr[i]);
                continue;
            }

            rightArr.push(arr[i]);
        }

        return {
            left: leftArr,
            right: rightArr,
        }
    }

    private mergeSortedArrays(
        leftArr: Record<string, string | number>[],
        rightArr: Record<string, string | number>[]
    ): Record<string, string | number>[] {
        const resultArrLength: number = leftArr.length + rightArr.length;
        let array: Record<string, string | number>[] = [];

        for (let i = 0, l = 0, r = 0; i < resultArrLength; i++) {
            if (r >= rightArr.length || this.compareObjects(leftArr[l], rightArr[r]) && l < leftArr.length) {
                array.push(leftArr[l]);
                l++;
                continue;
            }

            array.push(rightArr[r]);
            r++
        }

        return array;
    }

    private isAscDir(): boolean {
        return this.sortDirection === this.ascDir;
    }

    private isDescDir(): boolean {
        return this.sortDirection === this.descDir;
    }

    private compareObjects(
        a: Record<string, number | string>,
        b: Record<string, number | string>
    ): boolean {
        if(!a.hasOwnProperty(this.sortBy) || !b.hasOwnProperty(this.sortBy)) {
            throw new Error('Undefined object property: ' + this.sortBy);
        }

        return this.isAscDir() && a[this.sortBy] < b[this.sortBy]
            || this.isDescDir() && a[this.sortBy] > b[this.sortBy];
    }
}
