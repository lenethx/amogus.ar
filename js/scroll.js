function applytransform(layers, beforestr, topDistance, depths=false){
  for (let layer of layers){
	
	let depth = layer.getAttribute('data-depth');
	let movement = (-(topDistance * depth));
	let depthcounter=0;
	let a=beforestr;
	while (a.indexOf('[')>=0){
	  //console.log((depths ? (-(depths[depthcounter]*depth)) : movement));
	  a=a.substring(0,a.indexOf('['))+(a.substring(a.indexOf('[')+1,a.indexOf(']'))*(depths ? (-(depths[depthcounter++]*topDistance)) : movement))+a.substring(a.indexOf(']')+1);
	  //console.log(a);

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
  applytransform(layers, 'translate3d(0, [1]px, 0)', topDistance)
  applytransform(hlayers, 'translate3d([-1]px, [0.5]px, 0) ', topDistance);
  impostor=document.getElementsByClassName("impostor");
  applytransform(impostor, 'translate3d([-2.15]px, [0.7]px, 0) rotate([0.6]deg)', topDistance, [1,1,1]);
});  


function asswitch(athis){
	document.getElementById('mstyle').disabled= athis.checked ? false : true;   
	document.getElementById('impostor').classList.toggle('rotate'); 
	document.getElementById('impostor').classList.toggle('parallax')
	console.log(document.getElementById('mstyle'),athis.checked)
}