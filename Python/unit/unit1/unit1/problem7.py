fahrenheit = float(input("Enter the temperature in Fahrenheit: "))
celsius = (5 / 9) * (fahrenheit - 32)
print(f"{fahrenheit}°F is equivalent to {celsius:.2f}°C.")

celsius = float(input("\nEnter the temperature in Celsius: "))
fahrenheit = (9 / 5) * celsius + 32
print(f"{celsius}°C is equivalent to {fahrenheit:.2f}°F.")
