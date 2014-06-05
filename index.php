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