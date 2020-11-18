import quickSortHelper from './helper/quicksort';

export function bubblesort(arr: number[]): number[] {
  const result = [...arr];
  for (let i = result.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (result[j] > result[j + 1]) {
        const tmp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = tmp;
      }
    }
  }

  return result;
}

export function quicksort(arr: number[]): number[] {
  const tmp = [...arr];
  return quickSortHelper(tmp, 0, arr.length - 1);
}
