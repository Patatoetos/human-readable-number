module.exports = function toReadable(number) {
  
  var a = number.toString();
  var i = a.length;
  var b = a.length;
  var newNumber = '';
  
  for(;i>=1; i--) {

    if(i === 3 && a[i-3] == 1){
      var newNumber = newNumber + "one hundred";  //for i=3 first position
     }else if(i === 3 && a[i-3] == 2){
      var newNumber = newNumber + "two hundred";
     }else if(i === 3 && a[i-3] == 3){
      var newNumber = newNumber + "three hundred";
     }else if(i === 3 && a[i-3] == 4){
      var newNumber = newNumber + "four hundred";
     }else if(i === 3 && a[i-3] == 5){
      var newNumber = newNumber + "five hundred";
     }else if(i === 3 && a[i-3] == 6){
      var newNumber = newNumber + "six hundred";
     }else if(i === 3 && a[i-3] == 7){
      var newNumber = newNumber + "seven hundred";
     }else if(i === 3 && a[i-3] == 8){
      var newNumber = newNumber + "eight hundred";
     }else if(i === 3 && a[i-3] == 9){
      var newNumber = newNumber + "nine hundred";
     }

      else if( i === 2 && (a[i-1] == 0 && b === 3)){  // for i=3 if second position zero
      var newNumber = newNumber + "";
     }
      else if( i === 2 && (a[i-1] == 1 && a[i] == 0)){
      var newNumber = newNumber + " ten";
      return newNumber;
     }else if( i === 2 && (a[i-1] == 1 && a[i] == 1)){
      var newNumber = newNumber + " eleven";
      return newNumber;
     }else if( i === 2 && (a[i-1] == 1 && a[i] == 2)){
      var newNumber = newNumber + " twelve";
      return newNumber;
     }else if( i === 2 && (a[i-1] == 1 && a[i] == 3)){
      var newNumber = newNumber + " thirteen";
      return newNumber;
     }else if( i === 2 && (a[i-1] == 1 && a[i] == 4)){
      var newNumber = newNumber + " fourteen";
      return newNumber;
     }else if( i === 2 && (a[i-1] == 1 && a[i] == 5)){
      var newNumber = newNumber + " fifteen";
      return newNumber;
     }else if( i === 2 && (a[i-1] == 1 && a[i] == 6)){
      var newNumber = newNumber + " sixteen";
      return newNumber;
     }else if( i === 2 && (a[i-1] == 1 && a[i] == 7)){
      var newNumber = newNumber + " seventeen";
      return newNumber;
     }else if( i === 2 && (a[i-1] == 1 && a[i] == 8)){
      var newNumber = newNumber + " eighteen";
      return newNumber;
     }else if( i === 2 && (a[i-1] == 1 && a[i] == 9)){
      var newNumber = newNumber + " nineteen";
      return newNumber;
     }

      else if( i === 2 && (a[i-1] == 9 && b === 3)){   // for i=3 second position
      var newNumber = newNumber + " ninety";
     }else if( i === 2 && (a[i-1] == 8 && b === 3)){
      var newNumber = newNumber + " eighty";
     }else if( i === 2 && (a[i-1] == 7 && b === 3)){
      var newNumber = newNumber + " seventy";
     }else if( i === 2 && (a[i-1] == 6 && b === 3)){
      var newNumber = newNumber + " sixty";
     }else if( i === 2 && (a[i-1] == 5 && b === 3)){
      var newNumber = newNumber + " fifty";
     }else if( i === 2 && (a[i-1] == 4 && b === 3)){
      var newNumber = newNumber + " forty";
     }else if( i === 2 && (a[i-1] == 3 && b === 3)){
      var newNumber = newNumber + " thirty";
     }else if( i === 2 && (a[i-1] == 2 && b === 3)){
      var newNumber = newNumber + " twenty";
     }

     else if( i === 1 && a[i+1] == 0){ //for i=3 third position
      var newNumber = newNumber + "";
     }else if( i === 1 && a[i+1] == 9){
      var newNumber = newNumber + " nine";
     }else if( i === 1 && a[i+1] == 8){
      var newNumber = newNumber + " eight";
     }else if( i === 1 && a[i+1] == 7){
      var newNumber = newNumber + " seven";
     }else if( i === 1 && a[i+1] == 6){
      var newNumber = newNumber + " six";
     }else if( i === 1 && a[i+1] == 5){
      var newNumber = newNumber + " five";
     }else if( i === 1 && a[i+1] == 4){
      var newNumber = newNumber + " four";
     }else if( i === 1 && a[i+1] == 3){
      var newNumber = newNumber + " three";
     }else if( i === 1 && a[i+1] == 2){
      var newNumber = newNumber + " two";
     }else if( i === 1 && a[i+1] == 1){
      var newNumber = newNumber + " one";
     }

      else if( i === 2 && (a[i-2] == 9 && b === 2)){       // for i=2 first position
      var newNumber = newNumber + "ninety";
     }else if( i === 2 && (a[i-2] == 8 && b === 2)){
      var newNumber = newNumber + "eighty";
     }else if( i === 2 && (a[i-2] == 7 && b === 2)){
      var newNumber = newNumber + "seventy";
     }else if( i === 2 && (a[i-2] == 6 && b === 2)){
      var newNumber = newNumber + "sixty";
     }else if( i === 2 && (a[i-2] == 5 && b === 2)){
      var newNumber = newNumber + "fifty";
     }else if( i === 2 && (a[i-2] == 4 && b === 2)){
      var newNumber = newNumber + "forty";
     }else if( i === 2 && (a[i-2] == 3 && b === 2)){
      var newNumber = newNumber + "thirty";
     }else if( i === 2 && (a[i-2] == 2 && b === 2)){
      var newNumber = newNumber + "twenty";
     }

      else if( i === 2 && (a[i-2] == 1 && a[i-1] == 0)){ //for i=2 first and second position
      var newNumber = newNumber + "ten";
      return newNumber;
     }else if( i === 2 && (a[i-2] == 1 && a[i-1] == 1)){
      var newNumber = newNumber + "eleven";
      return newNumber;
     }else if( i === 2 && (a[i-2] == 1 && a[i-1] == 2)){
      var newNumber = newNumber + "twelve";
      return newNumber;
     }else if( i === 2 && (a[i-2] == 1 && a[i-1] == 3)){
      var newNumber = newNumber + "thirteen";
      return newNumber;
     }else if( i === 2 && (a[i-2] == 1 && a[i-1] == 4)){
      var newNumber = newNumber + "fourteen";
      return newNumber;
     }else if( i === 2 && (a[i-2] == 1 && a[i-1] == 5)){
      var newNumber = newNumber + "fifteen";
      return newNumber;
     }else if( i === 2 && (a[i-2] == 1 && a[i-1] == 6)){
      var newNumber = newNumber + "sixteen";
      return newNumber;
     }else if( i === 2 && (a[i-2] == 1 && a[i-1] == 7)){
      var newNumber = newNumber + "seventeen";
      return newNumber;
     }else if( i === 2 && (a[i-2] == 1 && a[i-1] == 8)){
      var newNumber = newNumber + "eighteen";
      return newNumber;
     }else if( i === 2 && (a[i-2] == 1 && a[i-1] == 9)){
      var newNumber = newNumber + "nineteen";
      return newNumber;
     }
     
     else if( i === 1 && a[i] == 0){ //for i=2 second position
      var newNumber = newNumber + "";
     }else if( i === 1 && a[i] == 9){ 
      var newNumber = newNumber + " nine";
     }else if( i === 1 && a[i] == 8){
      var newNumber = newNumber + " eight";
     }else if( i === 1 && a[i] == 7){
      var newNumber = newNumber + " seven";
     }else if( i === 1 && a[i] == 6){
      var newNumber = newNumber + " six";
     }else if( i === 1 && a[i] == 5){
      var newNumber = newNumber + " five";
     }else if( i === 1 && a[i] == 4){
      var newNumber = newNumber + " four";
     }else if( i === 1 && a[i] == 3){
      var newNumber = newNumber + " three";
     }else if( i === 1 && a[i] == 2){
      var newNumber = newNumber + " two";
     }else if( i === 1 && a[i] == 1){
      var newNumber = newNumber + " one";
     }

      else if( i === 1 && a[i-1] == 9){ //for i=1 first position
      var newNumber = newNumber + "nine";
     }else if( i === 1 && a[i-1] == 8){
      var newNumber = newNumber + "eight";
     }else if( i === 1 && a[i-1] == 7){
      var newNumber = newNumber + "seven";
     }else if( i === 1 && a[i-1] == 6){
      var newNumber = newNumber + "six";
     }else if( i === 1 && a[i-1] == 5){
      var newNumber = newNumber + "five";
     }else if( i === 1 && a[i-1] == 4){
      var newNumber = newNumber + "four";
     }else if( i === 1 && a[i-1] == 3){
      var newNumber = newNumber + "three";
     }else if( i === 1 && a[i-1] == 2){
      var newNumber = newNumber + "two";
     }else if( i === 1 && a[i-1] == 1){
      var newNumber = newNumber + "one";
     }else if( i === 1 && a[i-1] == 0){
      var newNumber = newNumber + "zero";
     }
      
  }
  return newNumber;
};
