function Cookie(){
  this.type = "chocolate chip";
  this.softness = 6;
  this.remaining = 3
};

Cookie.prototype = {
  eat: function(){
    this.remaining -= 1;
  },
  dipInMilk: function(){
    this.softness += 2;
  },
  anythingLeft: function(){
    if (this.remaining > 0) { return true }
    else { return false };
  }
};

createCookie = function(){
  return new Cookie();
};


var test = createCookie()
