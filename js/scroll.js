function applytransform(layers, beforestr, topDistance, ){
  for (let layer of layers){
	
	let depth = layer.getAttribute('data-depth');
	let movement = (-(topDistance * depth));
	let a='';
	let defernum=0;
	beforestr.slice(0,-1).forEach(x=>{
		//console.log();
		if (((typeof x === 'string' || x instanceof String)) && x.substr(0,5)=='defer'){
			defernum=x.substr(5);
			console.log('being deferred')
		} else if (defernum !=0){
			if(topDistance > window.innerWidth*1){
				a+=x+(-((topDistance-defernum*window.innerWidth/100) * depth));
				console.log(`deferred from ${x+movement} to ${x+(-((topDistance-defernum*window.innerWidth/100) * depth))}`)
			} else{
				a+=x+0;
				console.log(`deferred from ${x+movement} to ${x+0}`)
			}
			defernum=0;
		} else {
			a+=x+movement;
		}
	});
	a+=beforestr.at(-1)

	layer.style['-webkit-transform'] = a;
	layer.style['-moz-transform'] = a;
	layer.style['-ms-transform'] = a;
	layer.style['-o-transform'] = a;
	layer.style.transform = a;
	console.log(a);
  }
}


window.addEventListener('scroll', function(event) {
	var  layers, topDistance, hlayers, impostor; ;
	topDistance = this.scrollY;
	layers = document.getElementsByClassName("parallax");
	hlayers = document.getElementsByClassName("hor-parallax");
	impostor=document.getElementsByClassName("impostor");
	applytransform(layers, ['defer100','translate(0, calc(','vw / 22))'], topDistance)
	applytransform(hlayers, ['translate(calc(','defer100','vw / -19), calc(','vh / 22)) '], topDistance);
	applytransform(impostor, ['translate(calc(calc(max(','vw, ','defer100','vh ) / -1) - '+(window.matchMedia("(max-width: 768px)").matches ? '15vw':'8vw')+'), calc(','vh / 4)) rotate(calc(','deg * 2.5))'], topDistance);  
});  

