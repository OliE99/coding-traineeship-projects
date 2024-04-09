<?php
$riel = 2103942;
$kyat = 19092;
$krones = 109;
$lek = 9094;

echo "At the start of your travels you had $riel riel, $kyat kyat, $krones krones, and $lek lek.";

$riel_to_usd = 0.00024;
$kyat_to_usd = 0.00047;
$krones_to_usd = 0.093;
$lek_to_usd = 0.010;

$usd_from_riel = $riel * $riel_to_usd;
$usd_from_kyat = $kyat * $kyat_to_usd;
$usd_from_krones = $krones * $krones_to_usd;
$usd_from_lek = $lek * $lek_to_usd;

echo "\nYour $riel riel were exchanged for $usd_from_riel usd.";
echo "\nYour $kyat kyat were exchanged for $usd_from_kyat usd.";
echo "\nYour $krones krones were exchanged for $usd_from_krones usd.";
echo "\nYour $lek lek were exchanged for $usd_from_lek usd.";

$final_amount = $usd_from_riel + $usd_from_kyat + $usd_from_krones + $usd_from_lek - 4;
echo "\nAfter deducting the transactions fees, you'll be receiving $final_amount usd.";
// Formating and rounding $final_amount
echo "\n";
echo number_format($final_amount, 2);
echo "\n";
echo round($final_amount, 2);
echo "\n";
$dollars_only = $final_amount % 1000000000;
$change = $final_amount - $dollars_only;
$rounded_change = $change * 100;
$rounded_change %= 100;
$rounded_change /= 100;
$final_amount = $dollars_only + $rounded_change;
echo ($final_amount);
