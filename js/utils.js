
var defaultCats = "Black and White,Landscapes,People,Street,Underwater,Urban Exploration";
//var defaultCats = "Black and White";





///// UTILS
////////////////////////////


function pick(items){
	//var pos = Math.floor(Math.random()*items.length);
	//console.log('pos: '+pos);
	pos = rnd( items.length )
	//console.log(pos);
	return items[pos];
}


// RND alternate

function rnd(max){
	return Math.floor(Math.random()* max)
}

function badassRnd(max){
	var alea = Alea(); //cool lib!
	var seed =  alea();
	//console.log('RND seed: '+seed)
	return Math.floor(seed * max);
/*	var buf = new Uint8Array(1);
 //  var ar = new Array(200);
   var ar = new Int32Array(1);
   console.log(ar)
  window.crypto.getRandomValues(ar);*/
 // alert(ar[0]);
}


// extending JS

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

// return 0 - 365 value. SRC: http://javascript.about.com/library/bldayyear.htm
Date.prototype.getDOY = function() {
	var onejan = new Date(this.getFullYear(),0,1);
	return Math.ceil((this - onejan) / 86400000);
}


