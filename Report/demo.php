<?php
	$FileName=$_FILES['fileUpload']['name'];
	$TmpName=$_FILES['fileUpload']['tmp_name'];

	move_uploaded_file($TmpName,$FileName);

	echo("File Uploaded Successfully");
?>