<h1>Welcome to the Repetitive Cafe</h1>
<?php
$drinks = [
    "Latte" => 3.99,
    "Mocha" => 4.50,
    "Espresso" => 2.50,
    "Americano" => 2.00,
    "Cappucino" => 3.00,
    "Tea" => 2.50,
    "Green Tea" => 3.00
];

$pastries = [
    "Croissant",
    "Macaron",
    "Baklava",
    "Cannoli",
    "Éclair",
    "Tiramisu",
    "Pain au chocolat"
];
?>
<h3>Drinks!</h3>
<ul>
    <?php foreach ($drinks as $drink => $price) : ?>
        <li><?= "$drink: £{$price}" ?></li>
    <?php endforeach; ?>
</ul>
<h3>Pastries! ($2 each)</h3>
<ul>
    <?php for ($i = 0; $i < count($pastries); $i++) : ?>
        <li><?= $pastries[$i] ?></li>
    <?php endfor; ?>
</ul>