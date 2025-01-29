price_per_item = float(input("Enter the price of the item: "))

quantity = int(input("Enter the quantity of items: "))


subtotal = price_per_item * quantity

sales_tax = subtotal * 0.06625


total = subtotal + sales_tax


print("\n--- Receipt ---")
print(f"Original Price per Item: ${price_per_item:.2f}")
print(f"Quantity: {quantity}")
print(f"Sales Tax: ${sales_tax:.2f}")
print(f"Total (including tax): ${total:.2f}")
