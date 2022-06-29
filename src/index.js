module.exports = function toReadable(number) {
    let result
    const one = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    if (number < 20) {
        result = one[number];
    } else if (number < 100) {
        dozensCalc = Math.floor(number / 10)
        result =  dozens[dozensCalc] + ((number % 10 === 0) ? '' : ' ' + one[number % 10]);
    } else {
        oneCalc = Math.floor(number / 100)
        result =  one[oneCalc] + ' hundred' + ((number % 100 === 0) ? '' : ' ' + toReadable([number % 100]));
    }
    return result;
}