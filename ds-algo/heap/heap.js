const heapArr = [45, 50, 60, 70, 75, 80, 85];

//                     45 (1)
//                  50(2)  60(3)
//                70  75  80 85


function insertToHeap(newElem) {
  heapArr.push(newElem);

  let elementIndex = heapArr.length - 1; // 7, 3, 1

  let elementParentIndex = Math.floor(elementIndex / 2);

  while (elementIndex >= 1) {
    const element = heapArr[elementIndex];

    console.log({ elementParentIndex, elementIndex });

    if (element < heapArr[elementParentIndex]) {
      [heapArr[elementParentIndex], heapArr[elementIndex]] = [
        heapArr[elementIndex],
        heapArr[elementParentIndex],
      ];

      console.log({ heapArr });
    }

    elementIndex = elementParentIndex;
    elementParentIndex = Math.floor(elementIndex / 2);
  }
}

insertToHeap(30);

console.log(heapArr);
