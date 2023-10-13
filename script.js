function decimalToBinary(num) {
  //Write you code here
   let binary = '';
  while (decimalNumber > 0) {
    let remainder = decimalNumber % 2;
    binary = remainder + binary; // Add the remainder to the beginning
    decimalNumber = Math.floor(decimalNumber / 2);
  }

  return binary;
}

window.decimalToBinary = decimalToBinary;
