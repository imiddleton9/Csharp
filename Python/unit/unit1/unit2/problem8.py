#problem8
studenttype = str(input("Are you in state or out of state? "))
credits = int(input("How many credits are you taking? "))
moreIn = credits * 460.83
moreOut = credits * 715.15

if studenttype == "in" and credits < 12:
    print("Total: $545.46")
elif studenttype == "in" and credits >= 12 and credits < 20:
    print("Total: $7148.35")
elif studenttype == "out" and credits < 12:
    print("Total: $799.58")
elif studenttype == "out" and credits >= 12 and credits < 20:
    print("Total: $11222.97")
elif studenttype == "in" and credits > 19:
    print("Total: $" + str(moreIn))
elif studenttype == "out" and credits > 19:
    print("Total: $" + str(moreOut))



