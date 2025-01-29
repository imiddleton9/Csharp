height = float(input("Enter the height of the trapezoid: "))
base1 = float(input("Enter the first base of the trapezoid: "))
base2 = float(input("Enter the second base of the trapezoid: "))

trapezoidArea = height * (base1 + base2) / 2

print(f"The area of the trapezoid with height {height}, base1 {base1}, and base2 {base2} is {trapezoidArea:.2f}.")
