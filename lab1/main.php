<?php
function validateNumber($val, $min, $max){
    return isset($val) && is_numeric($val) && ($val>$min) && ($val<$max);
}
function validateTimezone($timezone) {
    return isset($timezone);
}
$Xcord = @$_GET['X'];
$Ycord = @$_GET['Y'];
$Radius = @$_GET['R'];
$Answer = "";
$TimeZone= @$_GET["timezone"];
$CurrentTime = date("j M o G:i:s", time()-$TimeZone*60);
$ExecutionTime = round(microtime(true) - $_SERVER['REQUEST_TIME_FLOAT'], 7);

if(validateNumber($Xcord,-3,3) && validateNumber($Ycord,-4,6) && validateNumber($Radius,0,6)) {
    if ($Ycord >= 0 && $Radius >= $Ycord && $Xcord >= 0 && $Radius >= $Xcord) {
         $Answer = "ПОПАЛ";
    } else if ($Ycord >= 0 && ($Xcord - $Ycord) ** 2 <= $Radius && $Xcord <= 0 && $Radius >= $Xcord) {
        $Answer = "ПОПАЛ";
    } else if ($Ycord <= 0 && $Xcord <= 0 && $Ycord >= -2 * $Xcord - $Radius) {
        $Answer = "ПОПАЛ";
    } else {
        $Answer = "Промазал!!!";
    }
    $myAnswers = [];
    $myAnswers = [
        'Y' => $Ycord,
        'X' => $Xcord,
        'R' => $Radius,
        'Current' => $CurrentTime,
        'Execution' => $ExecutionTime,
        'Answer' => $Answer,
    ];
    echo json_encode($myAnswers);
}else{
    $Error = "Не корректные данные";
    echo json_encode($Error);
}
?>

