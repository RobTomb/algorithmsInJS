
function beNewArr(arr , init , n) {
	let array = [];
	for (var i = init - 1; i < n + init - 1; i++) {
		array.push(arr[i]);
	}
	return array;
}

function setSentine(arr) {
	arr.push(100);
	return arr;
}

function merge(arr , p , q , r) {
	let arrA = beNewArr(arr , p , q - p);
	let arrB = beNewArr(arr , q , r - q + 1);
	arrA = setSentine(arrA);
	arrB = setSentine(arrB);
	let a = b = 0;
	for (var k = p - 1; k < r; k++) {
		if( arrA[a] < arrB[b] ){
			arr[k] = arrA[a];
			a++;
		}
		else{
			arr[k] = arrB[b];
			b++;
		}
	}
	return arr;
}

function main() {
	let arr = [2,4,5,7,1,2,3,6];
	arr = merge(arr , 1 , 5 , 8);
	console.log(arr);
}

main();