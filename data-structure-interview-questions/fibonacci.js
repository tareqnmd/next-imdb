// Normal Solution
var fib = function (n) {
	var arr = [0, 1];
	for (let i = 1; i < n; i++) {
		arr.push(arr[i] + arr[i - 1]);
	}
	return arr[n];
};

// Recursive Solution
const fib = function (n) {
	if (n <= 1) return n;
	return fib(n - 1) + fib(n - 2);
};

// One Liner
const fib = (n) => {
	return n <= 1 ? n : fib(n - 1) + fib(n - 2);
};

var fibGenerator = function* () {
	let a = 0;
	let b = 1;
	while (true) {
		yield a;
		let tmp = a;
		a = b;
		b += tmp;
	}
};
