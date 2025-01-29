#problem4
state = str(input("What state are you in? "))
gastype = str(input("What type of gas do you use? "))
gallons = float(input("How many gallons it takes to fill up? "))

if state == "NJ" and gastype == "regular":
    print(gallons * 3.107)
elif state == "NJ" and gastype == "midgrade":
    print(gallons * 3.656)
elif state == "NJ" and gastype == "premium":
    print(gallons * 3.947)
elif state == "NJ" and gastype == "diesel":
    print(gallons * 3.650)
elif state == "NY" and gastype == "regular":
    print(gallons * 3.172)
elif state == "NY" and gastype == "midgrade":
    print(gallons * 3.670)
elif state == "NY" and gastype == "premium":
    print(gallons * 4.058)
elif state == "NY" and gastype == "diesel":
    print(gallons * 3.928)
elif state == "CA" and gastype == "regular":
    print(gallons * 4.448)
elif state == "CA" and gastype == "midgrade":
    print(gallons * 4.665)
elif state == "CA" and gastype == "premium":
    print(gallons * 4.846)
elif state == "CA" and gastype == "diesel":
    print(gallons * 4.983)
elif state != "CA" "NY" or "NJ" and gastype == "regular":
    print(gallons * 3.126)
elif state != "CA" "NY" or "NJ" and gastype == "midgrade":
    print(gallons * 3.591)
elif state != "CA" "NY" or "NJ" and gastype == "premium":
    print(gallons * 3.947)
elif state != "CA" "NY" or "NJ" and gastype == "diesel":
    print(gallons * 3.650)