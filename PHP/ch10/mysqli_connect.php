<?php # Script 9.2 - mysqli_connect.php

// This file contains the database access information. 
// This file also establishes a connection to MySQL, 
// selects the database, and sets the encoding.

// Set the database access information as constants:
//DEFINE ('DB_USER', 'don');
//DEFINE ('DB_PASSWORD', 'wei');
//DEFINE ('DB_HOST', 'localhost');
//DEFINE ('DB_NAME', 'cps3351');

// Make the connection:
$dbc = mysqli_connect ("localhost:3306", "don", "wei", "cps3352") OR die ('Could not connect to MySQL: ' . mysqli_connect_error() );

// Set the encoding...
mysqli_set_charset($dbc, 'utf8');