#problem9
cost =  float(input("How much does the part cost? "))
parts = int(input("How many parts you want? "))
total = cost * parts

if parts < 10:
    print("Your total is: " + str(total))
elif parts > 10 and parts <= 20:
    print("Your total is: " + str(total -(total *.1)))
elif parts > 20 and parts <= 40:
    print("Your total is: " + str(total -(total *.2)))
elif parts > 40 and parts <= 70:
    print("Your total is: " + str(total -(total *.3)))
elif parts > 70 and parts <= 99:
    print("Your total is: " + str(total -(total *.4)))
elif parts > 99:
    print("Your total is: " + str(total -(total *.5)))