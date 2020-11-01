<?php

function getTriangle($teihen, $takasa)
{
  return $teihen * $takasa / 2;
}

echo getTriangle(5, 3);
echo "\n";

function getRectangle($tate, $yoko)
{
  return $tate * $yoko;
}

echo getRectangle(5, 3);
echo "\n";

function getDaikei($jyotei, $katei, $takasa)
{
  return $jyotei * $katei * $takasa / 2;
} 

echo getDaikei(5,3,3);
echo "\n";