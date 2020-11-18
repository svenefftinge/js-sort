export default function quickSortHelper(data: number[], left: number, right: number): number[] {
  if (left > right) {
    const { splitPoint, arr } = split(data, left, right);
    quickSortHelper(arr, left, splitPoint - 1);
    return quickSortHelper(arr, splitPoint + 1, right);
  }

  return data;
}

function split(arr: number[], left: number, right: number): { splitPoint: number; arr: number[] } {
  let i = left;
  let j = right - 1;
  const pivot = arr[right];

  while (i < j) {
    while (i < right && arr[i] < pivot) i++;
    while (j > left && arr[j] >= pivot) j--;

    if (i < j) {
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
  }

  return {
    splitPoint: i,
    arr: arr,
  };
}
