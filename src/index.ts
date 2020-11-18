import quickSortHelper from './helper/quicksort';

export function bubblesort(arr: number[]): number[] {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  return arr;
}

export function quicksort(arr: number[]): number[] {
  return quickSortHelper(arr, 0, arr.length - 1);
}
