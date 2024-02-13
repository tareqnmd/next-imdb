var basePalindrome = function (x) {
	return x < 0 ? false : x === +x.toString().split('').reverse().join('');
};

const myPalindrome = (x) => {
	return String(x) === String(x).split('').reverse().join('');
};

function palindromeEvery(str) {
	return str
		.split('')
		.every((char, index) => char === str[str.length - 1 - index]);
}

const palindromeOptimize = (x) => {
	if (x < 0) return false;
	const str = String(x);
	for (let i = 0; i < parseInt(str.length / 2); i++) {
		if (str[i] !== str[str.length - 1 - i]) return false;
	}
	return true;
};

const isPalindrome = (s) => {
	const str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
	for (let i = 0; i < parseInt(str.length / 2); i++) {
		if (str[i] !== str[str.length - 1 - i]) return false;
	}
	return true;
};

var linkedPalindrome = function (head) {
	for (let i = 0; i < parseInt(head.length / 2); i++) {
		console.log(
			head[i],
			head[head.length - 1 - i],
			head[i] !== head[head.length - 1 - i]
		);
		if (head[i] !== head[head.length - 1 - i]) return false;
	}
	return true;
	// return head.join('') === head.reverse().join('');
};

var firstPalindrome = function (head) {
	for (let i = 0; i < head.length; i++) {
		if (isPalindrome(head[i])) return head[i];
	}
	return '';
};

const res = linkedPalindrome([1, 2]);
console.log(res);
