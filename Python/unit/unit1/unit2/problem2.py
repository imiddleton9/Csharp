#problem2
brothers = int(input("How many brothers do you have? "))
sisters = int(input("How many sisters do you have? "))
if brothers < 0 or sisters < 0:
    print("please put a number 0 or more.")
elif brothers > sisters:
    print("you have more brothers than sisters")
elif sisters > brothers:
    print("you have more sisters than brothers")
elif brothers == 0 and sisters == 0:
    print("you don't have any brothers or sisters")
elif brothers == sisters:
    print("you have the same amount of brothers and sisters")
