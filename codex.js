
  // Original JavaScript code by Chirp Internet: www.chirp.com.au
  // Please acknowledge use of this code by including this header.

  var buildMenu = function(targetId, headingTag) {
    var target = document.getElementById(targetId);
    var headings = document.getElementsByTagName(headingTag || "h2");

    if(headings.length > 1) {
      // construct an unordered list of links, changed from ordered to unordered
      var menuList = document.createElement("UL");
      for(var i=0; i < headings.length; i++) {
        var anchorName = "";
        if(headings[i].id) {
          anchorName = headings[i].id;
        } else {
          anchorName = "section_" + i;
          headings[i].setAttribute("id", anchorName);
        }

        var headingText = headings[i].firstChild.nodeValue

        headings[i].firstChild.nodeValue = headingText; //(i+1) + ". " + removed this before heading text, would number them.

        var menuLink = document.createElement("A");
        menuLink.setAttribute("href", "#" + anchorName);
        menuLink.appendChild(document.createTextNode(headingText));

        var listItem = document.createElement("LI");
        listItem.appendChild(menuLink);

        menuList.appendChild(listItem);
      }

      // remove all nodes from inside target element
      while(target.hasChildNodes()) target.removeChild(target.firstChild);

      // insert our generated menu into the target element
      target.appendChild(menuList);
    } else {
      // remove the target element from the DOM
      target.parentNode.removeChild(target);
    }
  };

  if(document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
      buildMenu("submenu", "h2");
    }, false);
  } else {
    window.attachEvent("onload", function() {
      buildMenu("submenu", "h2");
    });
  }
            
    //diceroller
            
function diceRoll(dice, min, max, idnum) { //idnum appends the targetid so mark <p> similarly
    var min = Math.ceil(min);
    var max = Math.floor(max);
    var result = 0;
    var i;
    for(i=dice; i > 0; i--){
    var roll = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(roll);
    result= result + roll;
    }
    document.getElementById("rollresult"+idnum).innerHTML = result;
}


