const headerlinks=document.getElementById("to-be-navbar").children;
const headerlinktext=Array.prototype.map.call(headerlinks, x=>{let y=x.firstElementChild.innerHTML; x.firstElementChild.innerHTML="";return y;});
const headerlinkslength=headerlinktext.join('').length+headerlinktext.length-1;

const layers = document.getElementsByClassName("parallax");
const hlayers = document.getElementsByClassName("hor-parallax");
const jlayers=document.getElementsByClassName("just-hor-parallax");
const jvlayers=document.getElementsByClassName("just-parallax");
const impostor=document.getElementsByClassName("impostor");
const prefooter=document.getElementById("prefooter");
const abscontent= document.getElementById('abscontent');
const content = document.getElementById('content');
const navbar = document.getElementById("to-be-navbar")
const dropdownlink = document.getElementById("dropdown-link");
const dropdown = document.getElementById("dropdown");


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
	a+=beforestr[beforestr.length-1];

	layer.style['-webkit-transform'] = a;
	layer.style['-moz-transform'] = a;
	layer.style['-ms-transform'] = a;
	layer.style['-o-transform'] = a;
	layer.style.transform = a;
  }
}

function setContentHeight(){
	abscontent.style.height=`calc( ${content.offsetHeight}px + 150vw )`;
	if (!window.matchMedia("(max-width: 1010px)").matches){
		navbar.style.opacity=1
	}
	if (window.innerHeight > window.innerWidth){ 
		if( document.body.contains(dropdownlink)){
			dropdownlink.parentNode.replaceChild(newdropdownlink, dropdownlink)
		}
	} else if (document.body.contains(newdropdownlink)) {
		newdropdownlink.parentNode.replaceChild(dropdownlink, newdropdownlink)
	}
	headerstatus=0;
	updatescroll();
}

function yoffset(element){
	let y=0;
	while(element){
		y += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
	}
	return y;
}
function printtext(startdistance, enddistance, vwscrolled){
	if ((enddistance > vwscrolled && vwscrolled > startdistance) || ((vwscrolled < startdistance) && headerstatus==1) || ((vwscrolled > enddistance) && headerstatus==-1))  {
		headerstatus=0;
		
	}
	if (!headerstatus){
		vwscrolled-=startdistance
		let perchar=(enddistance-startdistance)/headerlinkslength;
		for (let x=0; x<headerlinktext.length;x++){
			headerlinks[x].firstElementChild.innerHTML=headerlinktext[x].substr(0, Math.floor((vwscrolled/perchar)-headerlinktext.slice(0,x).join('').length+x)-x)
			
		}		
		if (vwscrolled/perchar > headerlinkslength){
			headerstatus=1;
		} else if (vwscrolled/perchar <0) {
			headerstatus=-1;
		}
	}
}



function updatescroll() { 
	let vwscrolled=this.scrollY/this.innerWidth;
	let topDistance = this.scrollY;
	let footeryoffset=((yoffset(prefooter)-window.innerHeight)/window.innerWidth*100)
	applytransform(layers, ['defer100','translate(0, calc(','vw / 22))'], topDistance);
	applytransform(hlayers, ['translate(calc(calc(','defer100','vw / -19) - 100vw), calc(','vw / 44)) '], topDistance);
	applytransform(jlayers, [`defer${footeryoffset}`,'translate(calc(calc(',`defer${footeryoffset}`, 'ignoredepth', 'vw / -19) - 100vw), calc(calc(calc(',`defer${footeryoffset}`,'vw / -30) - 400vw ) + calc(','vw / 100)) )'], topDistance);
	applytransform(jvlayers, [`defer${footeryoffset}`,'translate(0, calc(calc(','vw / 44) - 20vw ))'], topDistance);
	applytransform(impostor, ['translate(calc(calc(','defer100','vw  / -1.3) - '+(window.matchMedia("(max-width: 768px)").matches ? '10vw':'8vw')+'), calc(','vw / 8)) rotate(calc(','deg * 4))'], topDistance);  
	printtext(0.45,0.8, vwscrolled);
	if (window.matchMedia("(max-width: 1010px)").matches){
		if (vwscrolled > 1.5){
			navbar.style.opacity=1-(vwscrolled-1.5)*6;
		} else {
			navbar.style.opacity=1
		}
	}	
}

function checkwidth(){
	if (!window.matchMedia("(min-width: 2600px)").matches){
		modal.close();
		window.removeEventListener('resize', checkwidth)
	}
}

var headerstatus=0;
var newdropdownlink=document.createElement('button');
newdropdownlink.id="dropdown-link";
newdropdownlink.className="navbar-link";


updatescroll();
window.addEventListener('scroll', updatescroll);  
setContentHeight();
window.addEventListener('resize', setContentHeight);

if (window.matchMedia("(min-width: 2600px)").matches){
	modal.open('maxwidthmodal');
	window.addEventListener('resize', checkwidth)
}