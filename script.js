'use strict';
/*odwołanie do pierwszego diva 
konwersja stopni Celsiusza do Farenheita CToF*/
var msg = 'Kliknij przycisk aby wprowadzić liczbę';
var outputCToF = document.getElementById('c-to-f-output');
outputCToF.innerHTML = msg; 
var buttonCToF = document.getElementById('c-to-f-button');

/*odwołanie do drugiego diva 
konwersja stopni Farenheita do Celsiusza FToC*/
var outputFToC = document.getElementById('f-to-c-output');
outputFToC.innerHTML = msg; 
var buttonFToC = document.getElementById('f-to-c-button');
// komunikaty
var msgNaN = 'To nie jest liczba';
var msgSetValue = 'Podaj jakąś wartośc';
var msgCancel = 'Naprawdę nie jesteś ciekawy???';
var msgPrompt = 'Wprowadz temperaturę w stopniach ';
//deklaracja zmiennych temperatury
var tempValue;
var tempValueFh;

// FUNKCJE
function cToF(c) {
  return Math.round((c * 1.8 + 32) * 10)/10; //przelicza stopnie C na F i zaokrągla do 1 miejsca po przecinku
}
function fToC(f) {
  return tempValue = Math.round((tempValueFh -32) / 1.8 * 10)/10; //przelicza stopnie F na C i zaokrągla do 1 miejsca po przecinku
  
}
//funkcja wyświetlająca odpowiednią informację zalezną od warunku temperatury w stopniach Celsiusza 
function tempInfo(c) {
  if (c <= 0){
    return 'W tej temperaturze woda pozostaje w stanie stałym';
  }
  else if (c >=0 && tempValue <= 18){
    return 'Odradzam kąpiel w morzu';
  }
  else if (c == 100){
    return 'W tej temperaturze wrze woda';
  }
  else if (c >=1539 && c <=3000){
    return 'W tej temperaturze stal jest płynna';
  }
  else {
    return 'Nie powiem Ci nic ciekawego na temat tej temperatury';
  }
}

//Przeliczanie Celciusz do Farenheit
buttonCToF.addEventListener('click', function(){
  tempValue = window.prompt( msgPrompt + 'Celsjusza');
  if (tempValue !== null) {
    tempValue = tempValue.replace(/,/g, '.'); //zamienia ',' na '.'
    if (tempValue === ''){
      outputCToF.innerHTML = msgSetValue;//sprawdzenie czy została wpisana jakaś wartość lub czy wciśnieto anuluj
    }  
  else if (isNaN(tempValue)) {
      outputCToF.innerHTML = msgNaN; //sprawdzenie czy wprowadzona wartośc jest liczbą, a raczej czy jest nieliczbą
    }
  else {
      outputCToF.innerHTML = tempValue + '&deg; Celsiusza to: ' + cToF(tempValue) 
                            + '&deg; Farenheita<br>' + tempInfo(tempValue) + '<br><br>' + outputCToF.innerHTML; 
    }   
  }
});
//Przeliczanie Farenheit do Celciusz to farenheit
buttonFToC.addEventListener('click', function(){
  tempValueFh = window.prompt( msgPrompt + 'Farenheita');
  
  if (tempValueFh !== null) {
    tempValueFh = tempValueFh.replace(/,/g, '.'); //zamienia ',' na '.'
    if (isNaN(tempValueFh)) {
      outputFToC.innerHTML = msgNaN; //sprawdzenie czy wprowadzona wartośc jest liczbą, a raczej czy jest nieliczbą
    }
    else if (tempValueFh === '') {
      outputFToC.innerHTML = msgSetValue;//sprawdzenie czy została wpisana jakaś wartość lub czy wciśnieto anuluj
    }
    else {
      outputFToC.innerHTML = tempValueFh + '&deg; Farenheita to: ' + fToC(tempValueFh) 
                            + '&deg; Celsiusza<br>' + tempInfo(tempValue) + '<br><br>' + outputFToC.innerHTML; 
    }
  }
});