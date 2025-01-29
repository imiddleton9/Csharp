mag = float(input("Enter a magnitude of an earthquake from the Richter scale (0-9): "))

if mag < 2.0:
  print("Micro - Not felt.")
elif 2.0 <= mag < 3.0:
  print("Minor - Often not felt, but can be recorded by seismographs.")
elif 3.0 <= mag < 4.0:
  print("Light - Often felt, but rarely causes damage.")
elif 4.0 <= mag < 5.0:
  print("Moderate - Can cause minor damage to poorly constructed buildings.")
elif 5.0 <= mag < 6.0:
  print("Strong - Can cause significant damage to buildings.")
elif 6.0 <= mag < 7.0:
  print("Major - Can cause widespread, heavy damage.")
elif 7.0 <= mag < 8.0:
  print("Great - Can cause serious damage and widespread devastation.")
else:
  print("Massive - Can cause catastrophic damage and widespread devastation.")