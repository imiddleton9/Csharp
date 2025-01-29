#problem1
password = int(input("What's your password? "))
result = "Your password is easy to guess" if password == 1234567890 else "Good enough I guess"
print(result)