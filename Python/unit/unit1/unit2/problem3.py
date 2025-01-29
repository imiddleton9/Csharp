#problem3
richter = float(input("What was the magnititude of the earthquake? "))

if richter >= 10:
    print("meteoric")
elif richter > 8.0 and richter < 10.0:
    print("great")
elif richter > 7.0 and richter < 8.0:
    print("major")
elif richter > 6.0 and richter < 7.0:
    print("strong")
elif richter > 5.0 and richter < 6.0:
    print("moderate")
elif richter > 4.0 and richter < 5.0:
    print("light")
elif richter > 3.0 and richter < 4.0:
    print("minor")
elif richter > 2.0 and richter < 3.0:
    print("very minor")
elif richter < 2.0:
    print("micro")