#problem7
vtype = str(input("Is it a commericial vehicle? "))
zone = str(input("What zone are you in? "))
hours = int(input("How many hours you need to park for? "))

if vtype == "no" and zone == "zone m1" and hours == 1:
    print("Total: $5.50")
elif vtype == "no" and zone == "zone m1" and hours == 2:
    print("Total: $14.50")
elif vtype == "yes" and zone == "zone m1" and hours == 1:
    print("Total: $7")
elif vtype == "yes" and zone == "zone m1" and hours == 2:
    print("Total: $17")
elif vtype == "yes" and zone == "zone m1" and hours == 3:
    print("Total: $30")
elif vtype == "no" and zone == "zone m2" and hours == 1:
    print("Total: $5")
elif vtype == "no" and zone == "zone m2" and hours == 2:
    print("Total: $8.25")
elif vtype == "yes" and zone == "zone m2" and hours == 1:
    print("Total: $6")
elif vtype == "yes" and zone == "zone m2" and hours == 2:
    print("Total: $15")
elif vtype == "yes" and zone == "zone m2" and hours == 3:
    print("Total: $27")
elif vtype == "no" and zone == "zone m3" and hours == 1:
    print("Total: $3")
elif vtype == "no" and zone == "zone m3" and hours == 2:
    print("Total: $8")
elif vtype == "no" and zone == "zone1" and hours == 1:
    print("Total: $2.50")
elif vtype == "no" and zone == "zone1" and hours == 2:
    print("Total: $7.50")
elif vtype == "no" and zone == "zone2" and hours == 1:
    print("Total: $2")
elif vtype == "no" and zone == "zone2" and hours == 2:
    print("Total: $5")
elif vtype == "no" and zone == "zone3" and hours == 3:
    print("Total: $1.50")
elif vtype == "no" and zone == "zone3" and hours == 2:
    print("Total: $4")