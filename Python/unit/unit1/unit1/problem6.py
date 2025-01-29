T = float(input("Enter the air temperature in degrees Fahrenheit: "))
V = float(input("Enter the wind speed in miles per hour: "))


if T <= 50 and V >= 3:
    
    W = 35.74 + 0.6215 * T - 35.75 * (V ** 0.16) + 0.4275 * T * (V ** 0.16)
    
    print(f"The Wind Chill Index is {W:.2f}°F.")
else:
    print("The Wind Chill Index formula is only valid for temperatures ≤ 50°F and wind speeds ≥ 3 mph.")
