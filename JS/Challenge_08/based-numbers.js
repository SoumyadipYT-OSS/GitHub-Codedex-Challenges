// Integer to Binary conversion

function ConvertToBinary(num) {
    let binary = '';
    while (num > 0) {
        binary = (num % 2) + binary;
        num = Math.floor(num / 2);
    }
    return binary;
}

async function main() {
    let num = 10;
    console.log(ConvertToBinary(num));
}
main();