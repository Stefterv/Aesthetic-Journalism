<?
	$page = "portal";
	if(isset($_GET['page'])){
		$page = $_GET['page'];
	}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Alfredo Jaar’s portal to reality</title>
	<link href="style.css" type="text/css" rel="stylesheet" />
	<link href="<?=$page?>.css" type="text/css" rel="stylesheet" />
	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-41389662-5', 'steftervelde.nl');
	  ga('send', 'pageview');

	</script>
	<meta charset="UTF-8" />
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="script.js"></script>
</head>
<body>
<div class="container">
	<?
		include($page.".php");
	?>
</div>
</body>
</html>