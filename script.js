function decimalToBinary(decimalNumber) {
  //Write you code here
   let binary = '';
  while (decimalNumber > 0) {
    let remainder = decimalNumber % 2;
    binary = remainder + binary;
    decimalNumber = Math.floor(decimalNumber / 2);
  }

  return binary;
}

window.decimalToBinary = decimalToBinary;
