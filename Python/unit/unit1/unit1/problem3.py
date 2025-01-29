number1 = float(input("first number: "))
number2 = float(input("second number: "))

sum = number1 + number2
difference = number1 - number2
product = number1 * number2
quotient = number1 / number2 if number2 != 0 else "undefined"
integer_division = number1 // number2 if number2 != 0 else "undefined"
power = number1 ** number2
remainder = number1 % number2 if number2 != 0 else "undefined"

print("\nResults:")

print(f"Sum: {sum}")
print(f"Difference: {difference}")
print(f"Product: {product}")
print(f"Quotient: {quotient}")
print(f"Quotient of Integer Division: {integer_division}")
print(f"Power: {power}")
print(f"Remainder: {remainder}")