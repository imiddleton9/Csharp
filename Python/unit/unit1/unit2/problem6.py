#problem6
ezpass = str(input("Do you have ezpass? "))
hours = str(input("Do you drive on peak hours? "))
vtype = int(input("What type of vehicle you drive? "))
axles = int(input("Number of axles? "))

if ezpass == "yes" and vtype == 1 and hours == "off" and axles == 2:
    print("your total is: $14.06")
elif ezpass == "yes" and vtype ==1 and hours == "on" and axles == 2:
    print("your total is: $16.06")
elif ezpass == "yes" and vtype == 1 and hours == "overnight" and axles == 2:
    print("your total is: N/A")
elif ezpass == "yes" and vtype == 1 and hours == "other" and axles == 2:
    print("your total is: $18.31")
elif ezpass == "yes" and vtype == 2 and hours == "off" and axles == 2:
    print("your total is: $41.36")
elif ezpass == "yes" and vtype == 2 and hours == "on" and axles == 2:
    print("your total is: $43.36")
elif ezpass == "yes" and vtype == 2 and hours == "overnight" and axles == 2:
    print("your total is: $38.36")
elif ezpass == "yes" and vtype == 2 and hours == "other" and axles == 2:
    print("your total is: $49.36")
elif ezpass == "yes" and vtype == 3 and hours == "off" and axles == 3:
    print("your total is: $62.04")
elif ezpass == "yes" and vtype == 3 and hours == "on" and axles == 3:
    print("your total is: $65.04")
elif ezpass == "yes" and vtype == 3 and hours == "overnight" and axles == 3:
    print("your total is: $57.54")
elif ezpass == "yes" and vtype == 3 and hours == "other" and axles == 3:
    print("your total is: $74.04")
elif ezpass == "yes" and vtype == 4 and hours == "off" and axles == 4:
    print("your total is: $82.72")
elif ezpass == "yes" and vtype == 4 and hours == "on" and axles == 4:
    print("your total is: $86.72")
elif ezpass == "yes" and vtype == 4 and hours == "overnight" and axles == 4:
    print("your total is: $76.72")
elif ezpass == "yes" and vtype == 4 and hours == "other" and axles == 4:
    print("your total is: $98.72")
else:
    print("You don't have ezpass. Please pay at cash toll")
