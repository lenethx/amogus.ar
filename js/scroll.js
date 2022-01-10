function applytransform(layers, beforestr, topDistance, factors=false, terms=false){
  for (let layer of layers){
	
	let depth = layer.getAttribute('data-depth');
	let movement = (-(topDistance * depth));
	let a='';

	beforestr.slice(0,-1).forEach(x=>{
		a+=x+movement
	});
	a+=beforestr.at(-1)

	layer.style['-webkit-transform'] = a;
	layer.style['-moz-transform'] = a;
	layer.style['-ms-transform'] = a;
	layer.style['-o-transform'] = a;
	layer.style.transform = a;
  }
}


window.addEventListener('scroll', function(event) {
  var  layers, topDistance, hlayers, impostor; ;
  topDistance = this.scrollY;
  layers = document.getElementsByClassName("parallax");
  hlayers = document.getElementsByClassName("hor-parallax");
  impostor=document.getElementsByClassName("impostor");
  applytransform(layers, ['translate3d(0, calc(','vh / 11), 0)'], topDistance)
  applytransform(hlayers, ['translate3d(calc(','vw / -19), calc(','vh / 22) , 0) '], topDistance);
  applytransform(impostor, ['translate3d(calc(calc(max(','vw, ','vh ) / -1) - '+(window.matchMedia("(max-width: 768px)").matches ? '15vw':'8vw')+'), calc(','vh / 4), 0) rotate(calc(','deg * 2.5))'], topDistance);
});  

