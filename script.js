function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}


/* ---------------------- calculator recipe list ---------------------- */


/* calculator recipe 0 */
function addPortionRecipe0() {
  /* number portion */
  let numberPortion = +document.getElementById('number-portion-rec-0').value;
  /* mulitply portion to ingredient*/
  let resultIngr1Rec0 = numberPortion * 125;
  let resultIngr2Rec0 = numberPortion * 12.5;
  let resultIngr3Rec0 = numberPortion * 0.25;
  let resultIngr4Rec0 = numberPortion * 2.5;
  let resultIngr5Rec0 = numberPortion * 4;
  let resultIngr6Rec0 = numberPortion * 2.5;
  let resultIngr7Rec0 = numberPortion * 52.5;
  let resultIngr8Rec0 = numberPortion * 56.25;
  let resultIngr9Rec0 = numberPortion * 6.25;
  /* add to html */
  document.getElementById('result-ingr-1-rec-0').innerHTML = `${resultIngr1Rec0} g`;
  document.getElementById('result-ingr-2-rec-0').innerHTML = `${resultIngr2Rec0} g`;
  document.getElementById('result-ingr-3-rec-0').innerHTML = `${resultIngr3Rec0}`;
  document.getElementById('result-ingr-4-rec-0').innerHTML = `${resultIngr4Rec0} g`;
  document.getElementById('result-ingr-5-rec-0').innerHTML = `${resultIngr5Rec0} g`;
  document.getElementById('result-ingr-6-rec-0').innerHTML = `${resultIngr6Rec0} g`;
  document.getElementById('result-ingr-7-rec-0').innerHTML = `${resultIngr7Rec0} ml`;
  document.getElementById('result-ingr-8-rec-0').innerHTML = `${resultIngr8Rec0} g`;
  document.getElementById('result-ingr-9-rec-0').innerHTML = `${resultIngr9Rec0} g`;
}


/* calculator recipe 1 */
function addPortionRecipe1() {
  /* number portion */
  let numberPortion = +document.getElementById('number-portion-rec-1').value;
  /* mulitply portion to ingredient*/
  let resultIngr1Rec1 = numberPortion * 200;
  let resultIngr2Rec1 = numberPortion * 50;
  let resultIngr3Rec1 = numberPortion * 100;
  let resultIngr4Rec1 = numberPortion * 1;
  let resultIngr5Rec1 = numberPortion * 1;
  let resultIngr6Rec1 = numberPortion * 4;
  /* add to html */
  document.getElementById('result-ingr-1-rec-1').innerHTML = `${resultIngr1Rec1} g`;
  document.getElementById('result-ingr-2-rec-1').innerHTML = `${resultIngr2Rec1} g`;
  document.getElementById('result-ingr-3-rec-1').innerHTML = `${resultIngr3Rec1} g`;
  document.getElementById('result-ingr-4-rec-1').innerHTML = `${resultIngr4Rec1}`;
  document.getElementById('result-ingr-5-rec-1').innerHTML = `${resultIngr5Rec1} El`;
  document.getElementById('result-ingr-6-rec-1').innerHTML = `${resultIngr6Rec1} g`;
}


/* calculator recipe 2 */
function addPortionRecipe2() {
  /* number portion */
  let numberPortion = +document.getElementById('number-portion-rec-2').value;
  /* mulitply portion to ingredient*/
  let resultIngr1Rec2 = numberPortion * 150;
  let resultIngr2Rec2 = numberPortion * 1;
  let resultIngr3Rec2 = numberPortion * 2;
  let resultIngr4Rec2 = numberPortion * 1;
  let resultIngr5Rec2 = numberPortion * 50;
  let resultIngr6Rec2 = numberPortion * 30;
  let resultIngr7Rec2 = numberPortion * 1;
  let resultIngr8Rec2 = numberPortion * 1;
  let resultIngr9Rec2 = numberPortion * 1;
  /* add to html */
  document.getElementById('result-ingr-1-rec-2').innerHTML = `${resultIngr1Rec2} g`;
  document.getElementById('result-ingr-2-rec-2').innerHTML = `${resultIngr2Rec2} El`;
  document.getElementById('result-ingr-3-rec-2').innerHTML = `${resultIngr3Rec2}`;
  document.getElementById('result-ingr-4-rec-2').innerHTML = `${resultIngr4Rec2}`;
  document.getElementById('result-ingr-5-rec-2').innerHTML = `${resultIngr5Rec2} g`;
  document.getElementById('result-ingr-6-rec-2').innerHTML = `${resultIngr6Rec2} g`;
  document.getElementById('result-ingr-7-rec-2').innerHTML = `${resultIngr7Rec2} g`;
  document.getElementById('result-ingr-8-rec-2').innerHTML = `${resultIngr8Rec2} g`;
  document.getElementById('result-ingr-9-rec-2').innerHTML = `${resultIngr9Rec2} g`;
}


/* calculator recipe 3 */
function addPortionRecipe3() {
  /* number portion */
  let numberPortion = +document.getElementById('number-portion-rec-3').value;
  /* mulitply portion to ingredient*/
  let resultIngr1Rec3 = numberPortion * 200;
  let resultIngr2Rec3 = numberPortion * 0.5;
  let resultIngr3Rec3 = numberPortion * 0.75;
  let resultIngr4Rec3 = numberPortion * 0.5;
  let resultIngr5Rec3 = numberPortion * 0.25;
  let resultIngr6Rec3 = numberPortion * 0.5;
  let resultIngr7Rec3 = numberPortion * 0.25;
  let resultIngr8Rec3 = numberPortion * 0.25;
  let resultIngr9Rec3 = numberPortion * 0.25;
  let resultIngr10Rec3 = numberPortion * 125;
  /* add to html */
  document.getElementById('result-ingr-1-rec-3').innerHTML = `${resultIngr1Rec3} g`;
  document.getElementById('result-ingr-2-rec-3').innerHTML = `${resultIngr2Rec3} m.-große`;
  document.getElementById('result-ingr-3-rec-3').innerHTML = `${resultIngr3Rec3} Zehe(n)`;
  document.getElementById('result-ingr-4-rec-3').innerHTML = `${resultIngr4Rec3} El`;
  document.getElementById('result-ingr-5-rec-3').innerHTML = `${resultIngr5Rec3}`;
  document.getElementById('result-ingr-6-rec-3').innerHTML = `${resultIngr6Rec3} El`;
  document.getElementById('result-ingr-7-rec-3').innerHTML = `${resultIngr7Rec3} gr. Dose(n)`;
  document.getElementById('result-ingr-8-rec-3').innerHTML = `${resultIngr8Rec3} Dose`;
  document.getElementById('result-ingr-9-rec-3').innerHTML = `${resultIngr9Rec3} Dose`;
  document.getElementById('result-ingr-10-rec-3').innerHTML = `${resultIngr10Rec3} ml`;
}