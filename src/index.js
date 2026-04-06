module.exports = function toReadable(number) {
  const a = number.toString();
  let i = a.length;
  const b = a.length;
  let newNumber = '';
  for (; i >= 1; i -= 1) {
    if (i === 3 && a[i - 3] === '1') {
      newNumber += `${newNumber}one hundred`; // for i=3 first position
    } else if (i === 3 && a[i - 3] === '2') {
      newNumber += `${newNumber}two hundred`;
    } else if (i === 3 && a[i - 3] === '3') {
      newNumber += `${newNumber}three hundred`;
    } else if (i === 3 && a[i - 3] === '4') {
      newNumber += `${newNumber}four hundred`;
    } else if (i === 3 && a[i - 3] === '5') {
      newNumber += `${newNumber}five hundred`;
    } else if (i === 3 && a[i - 3] === '6') {
      newNumber += `${newNumber}six hundred`;
    } else if (i === 3 && a[i - 3] === '7') {
      newNumber += `${newNumber}seven hundred`;
    } else if (i === 3 && a[i - 3] === '8') {
      newNumber += `${newNumber}eight hundred`;
    } else if (i === 3 && a[i - 3] === '9') {
      newNumber += `${newNumber}nine hundred`;
    } else if (i === 2 && a[i - 1] === '0' && b === 3) {
      newNumber = `${newNumber}`; // for i=3 if second position zero
    } else if (i === 2 && a[i - 1] === '1' && a[i] === '0') {
      newNumber = `${newNumber} ten`; // for i=3 second and third position
      return newNumber;
    } else if (i === 2 && a[i - 1] === '1' && a[i] === '1') {
      newNumber = `${newNumber} eleven`;
      return newNumber;
    } else if (i === 2 && a[i - 1] === '1' && a[i] === '2') {
      newNumber = `${newNumber} twelve`;
      return newNumber;
    } else if (i === 2 && a[i - 1] === '1' && a[i] === '3') {
      newNumber = `${newNumber} thirteen`;
      return newNumber;
    } else if (i === 2 && a[i - 1] === '1' && a[i] === '4') {
      newNumber = `${newNumber} fourteen`;
      return newNumber;
    } else if (i === 2 && a[i - 1] === '1' && a[i] === '5') {
      newNumber = `${newNumber} fifteen`;
      return newNumber;
    } else if (i === 2 && a[i - 1] === '1' && a[i] === '6') {
      newNumber = `${newNumber} sixteen`;
      return newNumber;
    } else if (i === 2 && a[i - 1] === '1' && a[i] === '7') {
      newNumber = `${newNumber} seventeen`;
      return newNumber;
    } else if (i === 2 && a[i - 1] === '1' && a[i] === '8') {
      newNumber = `${newNumber} eighteen`;
      return newNumber;
    } else if (i === 2 && a[i - 1] === '1' && a[i] === '9') {
      newNumber = `${newNumber} nineteen`;
      return newNumber;
    } else if (i === 2 && a[i - 1] === '9' && b === 3) {
      newNumber = `${newNumber} ninety`; // for i=3 second position
    } else if (i === 2 && a[i - 1] === '8' && b === 3) {
      newNumber = `${newNumber} eighty`;
    } else if (i === 2 && a[i - 1] === '7' && b === 3) {
      newNumber = `${newNumber} seventy`;
    } else if (i === 2 && a[i - 1] === '6' && b === 3) {
      newNumber = `${newNumber} sixty`;
    } else if (i === 2 && a[i - 1] === '5' && b === 3) {
      newNumber = `${newNumber} fifty`;
    } else if (i === 2 && a[i - 1] === '4' && b === 3) {
      newNumber = `${newNumber} forty`;
    } else if (i === 2 && a[i - 1] === '3' && b === 3) {
      newNumber = `${newNumber} thirty`;
    } else if (i === 2 && a[i - 1] === '2' && b === 3) {
      newNumber = `${newNumber} twenty`;
    } else if (i === 1 && a[i + 1] === '0') {
      newNumber = `${newNumber}`; // for i=3 third position
    } else if (i === 1 && a[i + 1] === '9') {
      newNumber = `${newNumber} nine`;
    } else if (i === 1 && a[i + 1] === '8') {
      newNumber = `${newNumber} eight`;
    } else if (i === 1 && a[i + 1] === '7') {
      newNumber = `${newNumber} seven`;
    } else if (i === 1 && a[i + 1] === '6') {
      newNumber = `${newNumber} six`;
    } else if (i === 1 && a[i + 1] === '5') {
      newNumber = `${newNumber} five`;
    } else if (i === 1 && a[i + 1] === '4') {
      newNumber = `${newNumber} four`;
    } else if (i === 1 && a[i + 1] === '3') {
      newNumber = `${newNumber} three`;
    } else if (i === 1 && a[i + 1] === '2') {
      newNumber = `${newNumber} two`;
    } else if (i === 1 && a[i + 1] === '1') {
      newNumber = `${newNumber} one`;
    } else if (i === 2 && a[i - 2] === '9' && b === 2) {
      newNumber = `${newNumber}ninety`; // for i=2 first position
    } else if (i === 2 && a[i - 2] === '8' && b === 2) {
      newNumber = `${newNumber}eighty`;
    } else if (i === 2 && a[i - 2] === '7' && b === 2) {
      newNumber = `${newNumber}seventy`;
    } else if (i === 2 && a[i - 2] === '6' && b === 2) {
      newNumber = `${newNumber}sixty`;
    } else if (i === 2 && a[i - 2] === '5' && b === 2) {
      newNumber = `${newNumber}fifty`;
    } else if (i === 2 && a[i - 2] === '4' && b === 2) {
      newNumber = `${newNumber}forty`;
    } else if (i === 2 && a[i - 2] === '3' && b === 2) {
      newNumber = `${newNumber}thirty`;
    } else if (i === 2 && a[i - 2] === '2' && b === 2) {
      newNumber = `${newNumber}twenty`;
    } else if (i === 2 && a[i - 2] === '1' && a[i - 1] === '0') {
      newNumber = `${newNumber}ten`; // for i=2 first and second position
      return newNumber;
    } else if (i === 2 && a[i - 2] === '1' && a[i - 1] === '1') {
      newNumber = `${newNumber}eleven`;
      return newNumber;
    } else if (i === 2 && a[i - 2] === '1' && a[i - 1] === '2') {
      newNumber = `${newNumber}twelve`;
      return newNumber;
    } else if (i === 2 && a[i - 2] === '1' && a[i - 1] === '3') {
      newNumber = `${newNumber}thirteen`;
      return newNumber;
    } else if (i === 2 && a[i - 2] === '1' && a[i - 1] === '4') {
      newNumber = `${newNumber}fourteen`;
      return newNumber;
    } else if (i === 2 && a[i - 2] === '1' && a[i - 1] === '5') {
      newNumber = `${newNumber}fifteen`;
      return newNumber;
    } else if (i === 2 && a[i - 2] === '1' && a[i - 1] === '6') {
      newNumber = `${newNumber}sixteen`;
      return newNumber;
    } else if (i === 2 && a[i - 2] === '1' && a[i - 1] === '7') {
      newNumber = `${newNumber}seventeen`;
      return newNumber;
    } else if (i === 2 && a[i - 2] === '1' && a[i - 1] === '8') {
      newNumber = `${newNumber}eighteen`;
      return newNumber;
    } else if (i === 2 && a[i - 2] === '1' && a[i - 1] === '9') {
      newNumber = `${newNumber}nineteen`;
      return newNumber;
    } else if (i === 1 && a[i] === '0') {
      newNumber = `${newNumber}`; // for i=2 second position
    } else if (i === 1 && a[i] === '9') {
      newNumber = `${newNumber} nine`;
    } else if (i === 1 && a[i] === '8') {
      newNumber = `${newNumber} eight`;
    } else if (i === 1 && a[i] === '7') {
      newNumber = `${newNumber} seven`;
    } else if (i === 1 && a[i] === '6') {
      newNumber = `${newNumber} six`;
    } else if (i === 1 && a[i] === '5') {
      newNumber = `${newNumber} five`;
    } else if (i === 1 && a[i] === '4') {
      newNumber = `${newNumber} four`;
    } else if (i === 1 && a[i] === '3') {
      newNumber = `${newNumber} three`;
    } else if (i === 1 && a[i] === '2') {
      newNumber = `${newNumber} two`;
    } else if (i === 1 && a[i] === '1') {
      newNumber = `${newNumber} one`;
    } else if (i === 1 && a[i - 1] === '9') {
      newNumber = `${newNumber}nine`; // for i=1 first position
    } else if (i === 1 && a[i - 1] === '8') {
      newNumber = `${newNumber}eight`;
    } else if (i === 1 && a[i - 1] === '7') {
      newNumber = `${newNumber}seven`;
    } else if (i === 1 && a[i - 1] === '6') {
      newNumber = `${newNumber}six`;
    } else if (i === 1 && a[i - 1] === '5') {
      newNumber = `${newNumber}five`;
    } else if (i === 1 && a[i - 1] === '4') {
      newNumber = `${newNumber}four`;
    } else if (i === 1 && a[i - 1] === '3') {
      newNumber = `${newNumber}three`;
    } else if (i === 1 && a[i - 1] === '2') {
      newNumber = `${newNumber}two`;
    } else if (i === 1 && a[i - 1] === '1') {
      newNumber = `${newNumber}one`;
    } else if (i === 1 && a[i - 1] === '0') {
      newNumber = `${newNumber}zero`;
    }
  }
  return newNumber;
};
