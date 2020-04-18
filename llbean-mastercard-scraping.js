var messyData = [...document.querySelectorAll('article [data-transaction-type="DEBITS"] [data-value]')]

var debits = messyData.map(node => node.dataset.value)

function sum(total, num){
	return Math.round(total) + Math.round(num);
}

var totalSpent = debits.reduce(sum)

console.log(totalSpent);