<html>

<body>
    <!--Your code goes here-->
    <?= "The hypotenuse of ${_GET['a']} and ${_GET['b']} is:" ?>
    <h4>
        <?= sqrt($_GET['a'] ** 2 + $_GET['b'] ** 2) ?>
    </h4>
    <a href="index.php">Reset</a>
</body>

</html>