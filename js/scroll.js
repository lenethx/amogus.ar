function applytransform(layers, beforestr, topDistance, factors=false, terms=false){
  for (let layer of layers){
	
	let depth = layer.getAttribute('data-depth');
	let movement = (-(topDistance * depth));
	let depthcounter=0;
	let a=beforestr;
	while (a.indexOf('[')>=0){
	  //console.log((factors ? (-(factors[depthcounter]*depth)) : movement));
	  a=a.substring(0,a.indexOf('['))+((a.substring(a.indexOf('[')+1,a.indexOf(']'))*(factors ? (-(factors[depthcounter]*topDistance)) : movement)) + (terms ? terms[depthcounter++] : 0))+a.substring(a.indexOf(']')+1);
	  //console.log(( terms ? terms[depthcounter] : 0));

	}
	//console.log("end");

	layer.style['-webkit-transform'] = a;
	layer.style['-moz-transform'] = a;
	layer.style['-ms-transform'] = a;
	layer.style['-o-transform'] = a;
	layer.style.transform = a;
  }
}


window.addEventListener('scroll', function(event) {
  var depth, layer, layers, movement, topDistance, translate3d, jlayers, rotate3d;
  topDistance = this.pageYOffset;
  layers = document.getElementsByClassName("parallax");
  hlayers = document.getElementsByClassName("hor-parallax");
  applytransform(layers, 'translate3d(0, calc([1]vh / 11), 0)', topDistance)
  applytransform(hlayers, 'translate3d(calc([-1]vw / 19), calc([0.5]vh / 11) , 0) ', topDistance);
  impostor=document.getElementsByClassName("impostor");
  applytransform(impostor, 'translate3d(calc(calc(max([-2.15]vw, [-2.15]vh ) / 19) - '+(window.matchMedia("(max-width: 768px)").matches ? '15vw':'8vw')+'), calc([0.7]vh / 11), 0) rotate([0.6]deg)', topDistance, [1,1,1,1]);
});  

