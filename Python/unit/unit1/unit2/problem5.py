#problem5
letter = str(input("What type of envelope are you sending? "))
weight = float(input("What is the weight in oz? "))

if letter == "stamped" and weight < 1:
    print("$0.73")
elif letter == "stamped" and weight < 2:
    print("$1.01")
elif letter == "stamped" and weight < 3:
    print("$1.29")
elif letter == "stamped" and weight < 3.5:
    print("$1.57")
elif letter == "metered" and weight < 1:
    print("$0.69")
elif letter == "metered" and weight < 2:
    print("$0.97")
elif letter == "metered" and weight < 3:
    print("$1.25")
elif letter == "metered" and weight < 3.5:
    print("$1.53")
elif letter == "flats" and weight < 1:
    print("$1.50")
elif letter == "flats" and weight < 2:
    print("$1.77")
elif letter == "flats" and weight < 3:
    print("$2.04")
elif letter == "flats" and weight < 4:
    print("$2.31")
elif letter == "flats" and weight < 5:
    print("$2.59")
elif letter == "flats" and weight < 6:
    print("$2.87")
elif letter == "flats" and weight < 7:
    print("$3.15")
elif letter == "flats" and weight < 8:
    print("$3.43")
elif letter == "flats" and weight < 9:
    print("$3.71")
elif letter == "flats" and weight < 10:
    print("$4.01")
elif letter == "flats" and weight < 11:
    print("$4.31")
elif letter == "flats" and weight < 12:
    print("$4.61")
elif letter == "flats" and weight < 13:
    print("$4.91")