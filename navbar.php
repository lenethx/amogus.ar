<head>
		<title><?php echo $title; ?></title>
		<link rel="icon" href="Amogus1.png">
		<link id="mstyle" rel="stylesheet" href="css/<?php echo $stylesheet; ?>">
        <link rel="stylesheet" href="css/navbar.css">
        <link rel="stylesheet" href="css/switch.css">
	</head>
	<body>
		<header>
			<ul>
				<li><h3>amogus</h3><li>
				<li><a href="#home">Home</a><li>
				<li><a href="#news">News</a><li>
				 <li><div class="dropdown">
					<button class="dropbtn">Dropdown
					  <i class="fa fa-caret-down"></i>
					</button>
					<div class="dropdown-content">
					  <a href="https://cecs.amogus.ar">C.E.C.S.</a>
					  <a href="https://amogus.ar/404">RSS</a>
					  <a href="https://solarsystem.amogus.ar">Sistema Solar</a>
					  <a href="<?php echo '#el-url-de-esto-es-${repo}.amogus.ar' //https://forus.amogus.ar ?>">Recetario</a>
					</div>
				 </div><li>
				<li>
					<label class="form-switch">
					<input type="checkbox" onchange="if(this.checked){document.getElementById('mstyle').disabled=true} else {document.getElementById('mstyle').disabled=false}">
					<i></i>
					sus
					</label>
				</li>
			</ul>
		</header>
