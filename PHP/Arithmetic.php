<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Calculation Form</title>
</head>
<body>
	<form action="handle_operation.php" method="post">
		<label for="number1">Number 1:</label>
		<input type="text" name="number1" id="number1"><br>

		<label for="number2">Number 2:</label>
		<input type="text" name="number2" id="number2"><br>

		<label for="operation">Operation:</label>
		<select name="operation" id="operation">
			<option value="add">Add</option>
			<option value="subtract">Subtract</option>
			<option value="multiply">Multiply</option>
			<option value="divide">Divide</option>
			<option value="modulus">Modulus</option>
		</select><br>

		<input type="submit" value="Calculate">
	</form>
</body>
</html>
