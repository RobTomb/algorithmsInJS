


function insertionSort(arr) {
	for (var i = 1; i < arr.length; i++) {
		let key = arr[i];
		let j = i - 1;
		while( key < arr[j] && j > -1 ){
			arr[j+1] = arr[j];
			j -= 1;
		}
		arr[j+1] = key;
	}
	return arr;
}

function main() {
	let arr = [4,2,4,6,1,3];
	return insertionSort(arr);
}

console.log(main());