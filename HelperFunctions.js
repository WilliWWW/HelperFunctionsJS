/* HELPER Functions */

function addLeadingZeros(countOfZeros, digits, input){
    var output = '';
	
	for (var i = 0; i <= countOfZeros; i++){
		output = output + '0';
	}
	output = output + input; 
	output = output.slice((digits*(-1)));
	return output;
}

function randomText(wordCount){
	var maxWordLength = 15;
	var text = "";
	for(var x=0;x<wordCount;x++){
		var randomWordLength = randNumMinMax(1,maxWordLength);
		var word = randomWord(randomWordLength) + " ";
		text += word;
	}
   return text;
}

function randomWord(length){
   var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
   var word = "";

   for(var x=0;x<length;x++)   {
      var i = Math.floor(Math.random() * 62);
      word += chars.charAt(i);
   }
   return word;
}

function randNum(limit){
	return Math.floor(Math.random()*limit)+1;
}

function randNumMinMax(min,max){
	return Math.round(Math.random() * (max - min)) + min;
}

function randBool(){
	var ran_number = !! Math.round(Math.random() * 1);

	if (!ran_number) {
		return true;
	} else {
		return false;
	}
}
