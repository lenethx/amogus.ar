function applytransform(layers, beforestr, topDistance, ){
  for (let layer of layers){
	
	let depth = layer.getAttribute('data-depth');
	let a='';
	let defernum=0;
	let ignoredepth=false;
	beforestr.slice(0,-1).forEach(x=>{
		if ((typeof x === 'string' || x instanceof String) && (x.substr(0,5)=='defer' || x=='ignoredepth') ){
			if (x.substr(0,5)=='defer'){
				defernum=x.substr(5);	
			} else {
				ignoredepth=true;
			}
		} else if (defernum !=0){
			if(topDistance > window.innerWidth/100*defernum){
				a+=x+(-((topDistance-defernum*window.innerWidth/100) * (ignoredepth ? 1 : depth)));
			} else{
				a+=x+0;
			}
			defernum=0;
			ignoredepth=false;
		} else {
			a+=x+(-((topDistance/window.innerWidth*800) * (ignoredepth ? 1 : depth)));
			ignoredepth=false;
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
	abscontent.style.height=`calc( ${content.offsetHeight}px + 150vw )`;
}

function yoffset(element){
	let y=0;
	while(element){
		y += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
	}
	return y;
}

var layers = document.getElementsByClassName("parallax");
var hlayers = document.getElementsByClassName("hor-parallax");
var jlayers=document.getElementsByClassName("just-hor-parallax");
var jvlayers=document.getElementsByClassName("just-parallax");
var impostor=document.getElementsByClassName("impostor");
var prefooter=document.getElementById("prefooter");
var abscontent= document.getElementById('abscontent');
var content = document.getElementById('content');
window.addEventListener('scroll', function(event) { 
	let topDistance = this.scrollY;
	let footeryoffset=((yoffset(prefooter)-window.innerHeight)/window.innerWidth*100)
	applytransform(layers, ['defer100','translate(0, calc(','vw / 22))'], topDistance);
	applytransform(hlayers, ['translate(calc(calc(','defer100','vw / -19) - 100vw), calc(','vw / 44)) '], topDistance);
	applytransform(jlayers, [`defer${footeryoffset}`,'translate(calc(calc(',`defer${footeryoffset}`, 'ignoredepth', 'vw / -19) - 100vw), calc(calc(calc(',`defer${footeryoffset}`,'vw / -30) - 400vw ) + calc(','vw / 100)) )'], topDistance);
	applytransform(jvlayers, [`defer${footeryoffset}`,'translate(0, calc(','vw / 44) )'], topDistance);
	applytransform(impostor, ['translate(calc(calc(','defer100','vw  / -1.3) - '+(window.matchMedia("(max-width: 768px)").matches ? '10vw':'8vw')+'), calc(','vw / 8)) rotate(calc(','deg * 2.5))'], topDistance);  
});  
setContentHeight();
window.addEventListener('resize', setContentHeight);
