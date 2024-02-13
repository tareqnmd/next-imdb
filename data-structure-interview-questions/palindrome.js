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
	const array = [];
    while(head !== null){
        array.push(head.val);
        head = head.next;
    }
    for (let i = 0; i < parseInt(array.length / 2); i++) {
		if (String(array[i]) !== String(array[array.length - 1 - i])){
             return false;
        }
        continue;
	}
	return true;
	// return array.join('') === array.reverse().join('');
};

var firstPalindrome = function (head) {
	for (let i = 0; i < head.length; i++) {
		if (isPalindrome(head[i])) return head[i];
	}
	return '';
};

const res = linkedPalindrome([1, 2]);
console.log(res);
