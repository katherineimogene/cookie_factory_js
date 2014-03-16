window.onload = function(){

var el = document.getElementsByClassName("new");
el[0].addEventListener("click", addCookie, false)

var otherel = document.getElementsByClassName("eat");
otherel[0].addEventListener("click", eatAllCookies, false)

};




var cookieJar = []
// PSEUDO CONTROLLER ===============================
function addCookie(){
  var cookie = createCookie()
  cookieJar.push(cookie);
  console.log(cookie);
  console.log(cookieJar);
  // $('.new').html("<img src="cookie"></img>")

}

function eatAllCookies(){
  console.log(cookieJar)
  for(var i = 0; i < cookieJar.length; i++){
    console.log("inside the loop")
    cookieJar[i].eat();
    console.log(cookieJar[i].remaining);
    console.log(cookieJar[i].anythingLeft());

  }
}


// VIEW !!! ===========================================
// cookieView = {}

// cookiewView.prototype = function(){
//   printCookie:
// }



// MODEL=====================================================
function Cookie(){
  this.type = "chocolate chip";
  this.softness = 6;
  this.remaining = 3
};


//MODEL METHODS ===============================================
Cookie.prototype = {
  eat: function(){
    this.remaining -= 1;
  },
  dipInMilk: function(){
    this.softness += 2;
  },
  anythingLeft: function(){
    if (this.remaining > 0) { return "There's more" }
    else { return "It's all gone" };
  }
};

//MODEL FACTORy
createCookie = function(){
  return new Cookie();
};

