import "./SortingVisualizer.css";

function selectionSort(sortedArray, arrayElements) {
  for (let i = 0; i < arrayElements; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < arrayElements; j++) {
      //i changed n to array elements
      if (sortedArray[j] < sortedArray[min]) {
        min = j;
      }
    }
    if (min !== i) {
      // Swapping the elements
      let tmp = sortedArray[i];
      sortedArray[i] = sortedArray[min];
      sortedArray[min] = tmp;
    }
  }

  console.log(sortedArray);
}
export default selectionSort;
