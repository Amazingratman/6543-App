

<?php
include 'html/head.html';
?>



<body>
<?php
include 'html/header.html';
?>
	
 <div class="container">
	<div class="scroller">
	<div id = "content">
	<?php
	include 'html/mainMenu.html';
	?>
	</div>
  </div>
 </div>
 
   <button onclick="goBack()">Go Back</button>
   
<?php
echo '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>';
echo '<script src="resources/scripts/globals.js" type="text/javascript"></script>';
echo '<script src="resources/scripts/Page.js" type="text/javascript"></script>';
echo '<script src="resources/scripts/BButton.js" type="text/javascript"></script>';
echo '<script src="resources/scripts/MainMenu.js" type="text/javascript"></script>';
?>
</body>

</html>
