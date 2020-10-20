<?php
file_put_contents('test2.log','  testst'.serialize($_GET).serialize($_POST),FILE_APPEND);
?>