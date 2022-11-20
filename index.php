<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>YJS</title>
<?php @include "./_include/head-src.php" ?> 
</head>
<body>
    <!----- intro ------>
    <?php @include "./intro.php" ?>
    <!----- ...intro ------>
    <!----- header ----->
    <header>
        <?php @include "./_include/header.php" ?>
    </header>
    <!-----...header ----->
    
    <!----- main ----->
    <main>
        <?php
            if (isset($_GET['sub'])) {
                @include "./sub/{$_GET['sub']}.php";
            } else {
                @include "./main.php";
            }
        ?>
    </main>
    <!-----...main ----->

    <!----- footer ----->
    <footer>

    </footer>
    <!----- ...footer ----->
</body>
</html>