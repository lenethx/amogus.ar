<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Top ten among us funnies of 2016: Sus and more!!1!">
    <title>Amogus</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/modal.css">
    <link rel="stylesheet" href="css/hero.css?v=<?= rand(0,1000000) ?>">
    <script src="js/modal.js" defer></script>
	  <script src="js/scroll.js?v=<?= rand(0,1000000) ?>" defer></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="abscontent">
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
                
              </div>
              
            </div>
          </section>
          <div class="clarification">A lot of these quotes are religious, but I'm not trying to make any point. I just found them while looking for impostor quotes.</div>
          
          <br><br><br>
          
        </div>
          
          <div id="prefooter">
            <div class="layer-bg footerlayer"  data-depth="0.10"></div>
            <div class="layer-star1 star footerlayer just-hor-parallax"  data-depth="0.10"></div>
            <div class="layer-star2 star footerlayer just-hor-parallax"  data-depth="0.20"></div>
            <div class="layer-star3 star footerlayer just-hor-parallax"  data-depth="0.30"></div>
            <div class="layer-overlay footerlayer just-parallax"  data-depth="-0.85"></div>
            <div class="layer-4 footerlayer"></div>
            <div class="layer-4 footerlayer flip180"></div>
          </div>
      
        <footer>
          <div class="colcont">
            <div class="footercol">
              <a class="tutorial-link footerbutton" href="https://medium.com/@PatrykZabielski/how-to-make-multi-layered-parallax-illustration-with-css-javascript-2b56883c3f27" target="_blank" rel="noopener noreferrer">Hero "image" inspiration</a>
              <button class="footerbutton" onclick="modal.open('ipmodal')">Dont like the website?</button>
              <button class="footerbutton" onclick="modal.open('contactmodal')">Contact</button>
              <span>Shoutout to big chungus</span>
              
            </div>
            <div class="footercol">
              <a href="https://github.com/lenethx/amogus.ar" class="github footerbutton" target="_blank" rel="noopener noreferrer"><span class='gh-icon'></span>Contribute on Github</a>
              <a class="footerbutton" href="/sites">Sites (mobile link)</a>
              <span>© <?= $date; ?> amogus.ar</span>    
            </div>
          </div>
          <br><br><br>
          <!--<hr>-->
          
        </footer>
      </div>
      
    </div>
    <div class="stickbox150">
      <div class="abs150">
        <div class="layer-4 layer " ></div>
      </div>
      <div id="hero">
        <div class="layer-bg layer parallax"  data-depth="0.10"></div>
        <div class="layer-star1 star layer hor-parallax"  data-depth="0.10"></div>
        <div class="layer-star2 star layer hor-parallax"  data-depth="0.20"></div>
        <div class="layer-star3 star layer hor-parallax"  data-depth="0.30"></div>
        <div class=" overimp"> 
              <div id="impostor" class="layer layer-1 impostor"  data-depth="0.20"></div>
            </div>
        <div class="layer-2 layer parallax"  data-depth="0.50"></div>
        <div class="layer-3 layer parallax"  data-depth="0.80"></div>
        <div class="layer-overlay layer parallax"  data-depth="0.85"></div>
        <div class="layer parallax to-be-navbar-container" data-depth="1.00">
          <div id="to-be-navbar" class="to-be-navbar">
            <b><span>Amogus</span></b>
            <a href="/" class="navbar-link"><span>Home</span></a>
            <a href="#" class="navbar-link"><span>News</span></a>
            <div class="dropdown" id="dropdown" >
              <a href="/sites" class="navbar-link" id="dropdown-link">Sites</a>
              <div class="dropdown-content">
                <a href="https://cecs.amogus.ar" class="navbar-link">C.E.C.S.</a>
                <a href="https://amogus.ar/404" class="navbar-link">RSS</a>
                <a href="https://solarsystem.amogus.ar" class="navbar-link">Sistema Solar</a>
                <a href="<?php echo '#el-url-de-esto-es-${repo}.amogus.ar' //https://forus.amogus.ar ?>" class="navbar-link">Recetario</a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
    
    <div class="popups">
      <div id="ipmodal" >
        <div class="ip">
          <b>
            <?="$ip"?>
          </b>
        </div>
        <iframe
          width="450"
          height="250"
          frameborder="0" style="border:0"
          scrolling="no" 
          marginheight="0" 
          marginwidth="0" 
          src="https://www.openstreetmap.org/export/embed.html?bbox=<?=$apidata->longitude-0.25?>%2C<?=$apidata->latitude-0.125?>%2C<?=$apidata->longitude+0.25?>%2C<?=$apidata->latitude+0.125?>&amp;layer=mapnik" allowfullscreen>
        </iframe> <!--REPLACE WITH OSM ASAP-->
        
      </div>
      <div id="contactmodal">
        contact@amogus.ar
      </div>
      <div id="maxwidthmodal">
        This screen width is not supported. Please reduce it to under 2600px.
      </div>
    </div>

    <script>
      console.log("<?= $debug ?>")
    </script>
  </body>
</html>

