// Validator--------------------------------------------------------------------------------------------------------------------------

function outputnum(){
	var cardNum = document.getElementById("cardNum").value;
	return cardNum.toString();
}

var valNum = document.querySelector('#valNum');

document.querySelector('#submit1').addEventListener('click', () => {
	console.log(outputnum());
	console.log(outputnum().length);

	if(outputnum().length == 16){ //checking if cardNum is the right length (16 digits long)
		var fifties = parseInt(outputnum().substring(0,2)); //setting "fifties" to equal the first 2 digits of cardNum
		var range = parseInt(outputnum().substring(0,6)); //setting "range" to equal the first 6 digits of cardNum

		if((fifties > 50 && fifties < 56) || (range > 222099 && range < 272100)){ //checking for valid digits at the start of the cardNum
			//getting each digit into their own variable and doubling the ones we need to have doubled
			var iFifteen = parseInt("" + outputnum().charAt(15));

			var iFourteen = parseInt("" + outputnum().charAt(14));
			iFourteen *= 2;

			var iThirteen = parseInt("" + outputnum().charAt(13));

			var iTwelve = parseInt("" + outputnum().charAt(12));
			iTwelve *= 2;

			var iEleven = parseInt("" + outputnum().charAt(11));

			var iTen = parseInt("" + outputnum().charAt(10));
			iTen *= 2;

			var iNine = parseInt("" + outputnum().charAt(9));

			var iEight = parseInt("" + outputnum().charAt(8));
			iEight *= 2;

			var iSeven = parseInt("" + outputnum().charAt(7));

			var iSix = parseInt("" + outputnum().charAt(6));
			iSix *= 2;

			var iFive = parseInt("" + outputnum().charAt(5));

			var iFour = parseInt("" + outputnum().charAt(4));
			iFour *= 2;

			var iThree = parseInt("" + outputnum().charAt(3));

			var iTwo = parseInt("" + outputnum().charAt(2));
			iTwo *= 2;

			var iOne = parseInt("" + outputnum().charAt(1));

			var iZero = parseInt("" + outputnum().charAt(0));
			iZero *= 2;

			//checking if any doubled digit exceeds 9, subtracting nine if it's true
			if(iFourteen > 9){
				iFourteen -= 9;
			}if(iTwelve > 9){
				iTwelve -= 9;
			}if(iTen > 9){
				iTen -= 9;
			}if(iEight > 9){
				iEight -= 9;
			}if(iSix > 9){
				iSix -= 9;
			}if(iFour > 9){
				iFour -= 9;
			}if(iTwo > 9){
				iTwo -= 9;
			}if(iZero > 9){
				iZero -= 9;
			}

			//using each variable to obtain the sum of each digit
			var total = iZero + iOne + iTwo + iThree + iFour + iFive + iSix + iSeven + iEight + iNine + iTen + iEleven + iTwelve + iThirteen + iFourteen + iFifteen;

			if(total % 10 == 0){
				valNum.innerHTML = "Valid!"; //if the final number is a multiple of 10
			}else{
				valNum.innerHTML = "Invalid"; //if not a multiple of 10
			}
		}else{
			valNum.innerHTML = "Invalid"; //if number is 16 digits long but fails to begin with either 51-55 or 222100-272099
		}
	}else{
		valNum.innerHTML = "Invalid"; //if the number is not 16 digits long
	}
});


// Generator-------------------------------------------------------------------------------------------------------------


function outputnum2(){
	var cardAmount = document.getElementById("cardAmount").value;
	return cardAmount;
}

function rnd(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector('#submit2').addEventListener('click', () => {
	console.log(outputnum2());

	var option, x, total, wholeNum;

	for(var i = 0; i < outputnum2(); i++){
		option = rnd(1, 2); //used to randomly choose if cardNum starts with 222100-272099 or 51-55
		wholeNum = "";
		if(option == 1){
			var rndRange = rnd(222100, 272099); //222100-272099
			wholeNum += "" + rndRange;
			var rndRangeRest = 0;
			for(var n = 0; n < 9; n++){ //randomly generate 9 individual digits (0-9) after the first 6 digits 
				rndRangeRest = rnd(0, 9);
				wholeNum += "" + rndRangeRest; //combining first 6 digits with the rest of the digits as a string
			}
		}else{
			wholeNum = "";
			var fifties = rnd(51, 55); //51-55
			wholeNum += "" + fifties;
			var fiftiesRest = 0;
			for(var d = 0; d < 13; d++){ //randomly generate 13 individual digits (0-9) after the first 2 digits
				fiftiesRest = rnd(0, 9);
				wholeNum += "" + fiftiesRest; //combining first 2 digits with the rest of the digits as a string
			}
		}

		//declaring a variable for each digit within "wholeNum"
		var iFourteen2 = parseInt("" + wholeNum.charAt(14));
		iFourteen2 *= 2;

		var iThirteen2 = parseInt("" + wholeNum.charAt(13));

		var iTwelve2 = parseInt("" + wholeNum.charAt(12));
		iTwelve2 *= 2;

		var iEleven2 = parseInt("" + wholeNum.charAt(11));

		var iTen2 = parseInt("" + wholeNum.charAt(10));
		iTen2 *= 2;

		var iNine2 = parseInt("" + wholeNum.charAt(9));

		var iEight2 = parseInt("" + wholeNum.charAt(8));
		iEight2 *= 2;

		var iSeven2 = parseInt("" + wholeNum.charAt(7));

		var iSix2 = parseInt("" + wholeNum.charAt(6));
		iSix2 *= 2;

		var iFive2 = parseInt("" + wholeNum.charAt(5));

		var iFour2 = parseInt("" + wholeNum.charAt(4));
		iFour2 *= 2;

		var iThree2 = parseInt("" + wholeNum.charAt(3));

		var iTwo2 = parseInt("" + wholeNum.charAt(2));
		iTwo2 *= 2;

		var iOne2 = parseInt("" + wholeNum.charAt(1));

		var iZero2 = parseInt("" + wholeNum.charAt(0));
		iZero2 *= 2;

		//if any doubled digit exceeds 9, subtract 9
		if(iFourteen2 > 9){
			iFourteen2 -= 9;
		}if(iTwelve2 > 9){
			iTwelve2 -= 9;
		}if(iTen2 > 9){
			iTen2 -= 9;
		}if(iEight2 > 9){
			iEight2 -= 9;
		}if(iSix2 > 9){
			iSix2 -= 9;
		}if(iFour2 > 9){
			iFour2 -= 9;
		}if(iTwo2 > 9){
			iTwo2 -= 9;
		}if(iZero2 > 9){
			iZero2 -= 9;
		}

		//obtaining the sum of each digit using these variables
		total = iZero2 + iOne2 + iTwo2 + iThree2 + iFour2 + iFive2 + iSix2 + iSeven2 + iEight2 + iNine2 + iTen2 + iEleven2 + iTwelve2 + iThirteen2 + iFourteen2;

		//making sure that the last digit "x" makes the entire number a valid MasterCard number
		if(total % 10 != 0){
			x = 10 - (total % 10);
		}else{
			x = 0; //if total is already divisible by 10, leave x as 0
		}		
		var options;
	    for(var i = 0; i < outputnum2(); i++){
	    	options += "<option value='"+i+"'>"+wholeNum + x +"</option>";
	    	document.getElementById('drop').style.display = "block";
	    }
	    document.getElementById('drop').innerHTML = options; //valid mastercard numbers
	}
});