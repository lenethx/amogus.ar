function applytransform(layers, beforestr, topDistance, ){
  for (let layer of layers){
	
	let depth = layer.getAttribute('data-depth');
	let movement = (-((topDistance/window.innerWidth*800) * depth));
	let a='';
	let defernum=0;
	beforestr.slice(0,-1).forEach(x=>{
		//console.log();
		if (((typeof x === 'string' || x instanceof String)) && x.substr(0,5)=='defer'){
			defernum=x.substr(5);
			//console.log('being deferred')
		} else if (defernum !=0){
			if(topDistance > window.innerWidth*1){
				a+=x+(-((topDistance-defernum*window.innerWidth/100) * depth));
				//console.log(`deferred from ${x+movement} to ${x+(-((topDistance-defernum*window.innerWidth/100) * depth))}`)
			} else{
				a+=x+0;
				//console.log(`deferred from ${x+movement} to ${x+0}`)
			}
			defernum=0;
		} else {
			a+=x+movement;
		}
	});
	a+=beforestr.at(-1);

	layer.style['-webkit-transform'] = a;
	layer.style['-moz-transform'] = a;
	layer.style['-ms-transform'] = a;
	layer.style['-o-transform'] = a;
	layer.style.transform = a;
	//console.log(a);
  }
}

function setContentHeight(){
	document.getElementById('abscontent').style.height=`calc( ${document.getElementById('content').offsetHeight}px + 150vw )`;
	//console.log(`calc( ${document.getElementById('content').offsetHeight}px + 50vw )`)
}


window.addEventListener('scroll', function(event) {
	let layers, topDistance, hlayers, impostor, jlayers; 
	topDistance = this.scrollY;
	layers = document.getElementsByClassName("parallax");
	hlayers = document.getElementsByClassName("hor-parallax");
	jlayers=document.getElementsByClassName("just-hor-parallax");
	impostor=document.getElementsByClassName("impostor");
	prefooter=document.getElementById("prefooter");
	applytransform(layers, ['defer100','translate(0, calc(','vw / 22))'], topDistance);
	applytransform(hlayers, ['translate(calc(calc(','defer100','vw / -19) - 100vw), calc(','vw / 44)) '], topDistance);
	applytransform(jlayers, ['defer'+(prefooter.offsetHeight/window.innerWidth*100),'translate(calc(calc(','vw / -19) - 100vw), 0 '], topDistance);
	applytransform(impostor, ['translate(calc(calc(','defer100','vw  / -1.3) - '+(window.matchMedia("(max-width: 768px)").matches ? '10vw':'8vw')+'), calc(','vw / 8)) rotate(calc(','deg * 2.5))'], topDistance);  
});  
setContentHeight();
window.addEventListener('resize', setContentHeight);
