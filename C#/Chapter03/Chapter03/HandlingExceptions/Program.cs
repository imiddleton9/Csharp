using System;
using static System.Console;
namespace CheckingForOverflow
{
 class Program
 {
 static void Main(string[] args)
 {
 // try
 // {
 // checked
 // {
 var x = int.MaxValue; // Update x to var assigned to max decimal
 WriteLine($"Initial value: {x}");
 x++;
 WriteLine($"After incrementing: {x}");
 x++;
 WriteLine($"After incrementing: {x}");
 x++;
 WriteLine($"After incrementing: {x}");
 // }
 // }
 // catch (OverflowException)
 // {
 // WriteLine("The code overflowed but I caught the exception.");
 // }
 unchecked
 {
 ulong maxULong = ulong.MaxValue;
 object y = maxULong; // Update y to object assigned to max ulong
 WriteLine($"Initial value: {y}");
 if (maxULong > int.MaxValue)
 {
 y = int.MaxValue;
 WriteLine("Casting to int.MaxValue due to overflow.");
 }
 else
 {
 y = (int)maxULong;
 }
 WriteLine($"After decrementing: {y}");
 if ((int)y > int.MinValue)
 {
 y = (int)y - 1;
 WriteLine($"After decrementing: {y}");
}
 else
 {
 WriteLine("Casting to int.MinValue due to overflow.");
 }
 }
 }
 }
}
