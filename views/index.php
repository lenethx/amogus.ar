<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/hero.css">
    <link rel="stylesheet" href="css/oldhero.css" id="mstyle" disabled>
    <link rel="stylesheet" href="css/switch.css">

  </head>
  <body>
    <label class="form-switch">
      <input class="asswitch" type="checkbox" onchange="document.getElementById('mstyle').disabled= this.checked ? false : true;   document.getElementById('impostor').classList.toggle('rotate'); document.getElementById('impostor').classList.toggle('parallax')">
      <i></i>
    </label>
    <div id="hero">
      <div class="layer-bg layer parallax"  data-depth="0.10"></div>
      <div id="impostor" class="layer-1 layer rotate"  data-depth="0.20"></div>
      <div class="layer-2 layer parallax"  data-depth="0.50"></div>
      <div class="layer-3 layer parallax"  data-depth="0.80"></div>
      <div class="layer-overlay layer parallax"  data-depth="0.85"></div>
      <div class="layer-4 layer parallax"  data-depth="1.00"></div>
    </div>
    <div id="hero-mobile"></div>
    <div id="content">
      <div class="container">
        <section class="first-section">
          <div class="row">
            <div class="col-sm-6">
              <h1>Amogus.</h1>
            </div>
          </div>
          
          <div class="row">
            <div class="col-sm-6">
              <p>“The most detestable wickedness, the most horrid cruelties, and the greatest miseries, that have afflicted the human race have had their origin in this thing called revelation, or revealed religion. It has been the most dishonourable belief against the character of the divinity, the most destructive to morality, and the peace and happiness of man, that ever was propagated since man began to exist. It is better, far better, that we admitted, if it were possible, a thousand devils to roam at large, and to preach publicly the doctrine of devils, if there were any such, than that we permitted one such impostor and monster as Moses, Joshua, Samuel, and the Bible prophets, to come with the pretended word of God in his mouth, and have credit among us.”</p>
              <p class="qauthor">― Thomas Paine, The Age of Reason</p>
              <p>“If we could believe that he [Jesus] really countenanced the follies, the falsehoods, and the charlatanism which his biographers [Gospels] father on him, and admit the misconstructions, interpolations, and theorizations of the fathers of the early, and the fanatics of the latter ages, the conclusion would be irresistible by every sound mind that he was an impostor”</p>
              <p class="qauthor">― Thomas Jefferson, Letters of Thomas Jefferson</p>
            </div>
            <div class="col-sm-6">
              <p>“Don’t you ever dare judge, for who among us can say that when the devil himself offered us a deal, we refused?”</p>
              <p class="qauthor">― Kamand Kojouri</p>
              <p>“This Fremen religious adaptation, then, is the source of what we now recognize as "The Pillars of the Universe," whose Qizara Tafwid are among us all with signs and proofs and prophecy.”</p>
              <p class="qauthor">― Princess Irulan, Arrakis Awakening</p>
              <a class="tutorial-link" href="https://medium.com/@PatrykZabielski/how-to-make-multi-layered-parallax-illustration-with-css-javascript-2b56883c3f27">
                Learn how to create this parallax effect</a>
            </div>
          </div>
        </section>
        <div class="clarification">A lot of these quotes are religious, but I'm not trying to make any point. I just found them while looking for impostor quotes.</div>
      </div>
      
    </div>
    <script>

        function applytransform(layers, beforestr, topDistance,){
          for (let layer of layers){
            
            depth = layer.getAttribute('data-depth');
            movement = (-(topDistance * depth));
            a=beforestr
            while (a.indexOf('[')>=0){
              a=a.substring(0,a.indexOf('['))+(a.substring(a.indexOf('[')+1,a.indexOf(']'))*movement)+a.substring(a.indexOf(']')+1)
            }
            console.log(a)
            layer.style['-webkit-transform'] = a;
            layer.style['-moz-transform'] = a;
            layer.style['-ms-transform'] = a;
            layer.style['-o-transform'] = a;
            layer.style.transform = a;
          }
        }

        (function() {
        window.addEventListener('scroll', function(event) {
          var depth, layer, layers, movement, topDistance, translate3d, jlayers, rotate3d;
          topDistance = this.pageYOffset;
          layers = document.getElementsByClassName("parallax");
          jlayers = document.getElementsByClassName("rotate");
          applytransform(layers, 'translate3d(0, [1]px, 0)', topDistance)
          applytransform(jlayers, 'translate3d([0.1]px, [-2]px, 0) rotate([-1]deg)', topDistance, -1)

          
        });
      }).call(this);
    </script>
  </body>
</html>

