export default function quicksortHelper(arr: number[], left: number, right: number): number[] {
  let index: number;
  if (arr.length > 1) {
    index = partition(arr, left, right);
    if (left < index - 1) {
      quicksortHelper(arr, left, index - 1);
    }
    if (index < right) {
      quicksortHelper(arr, index, right);
    }
  }

  return arr;
}

function partition(arr: number[], left: number, right: number) {
  const pivot = arr[Math.floor((right + left) / 2)];
  let i = left,
    j = right;

  while (i <= j) {
    while (arr[i] < pivot) i++;
    while (arr[j] > pivot) j--;

    if (i <= j) {
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
      i++;
      j--;
    }
  }
  return i;
}
