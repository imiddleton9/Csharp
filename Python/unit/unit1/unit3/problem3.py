#problem 3
count = 0
total = 0
num = float(input("pick a number: "))
while count < 5:
    print(num)
    total += num
    average = total /5
    print("Your average is: " + str(total))
    count += 1

    