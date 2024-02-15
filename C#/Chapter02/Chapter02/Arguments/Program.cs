using System;
using static System.Console;
namespace Arguments
{
  class Program
 {
 static void Main(string[] args)
 {
 WriteLine($"There are {args.Length} arguments.");
 foreach (string arg in args)
 {
 WriteLine(arg);
 }
 if (args.Length < 3)
 {
 WriteLine("You must specify two colors and a cursor size, e.g.");
 WriteLine("dotnet run red yellow 10");
 return; // stop running
 }
 ForegroundColor = (ConsoleColor)Enum.Parse(
 enumType: typeof(ConsoleColor),
 value: args[0],
 ignoreCase: true);
 BackgroundColor = (ConsoleColor)Enum.Parse(
 enumType: typeof(ConsoleColor),
 value: args[1],
 ignoreCase: true);
 try
 {
 if (int.TryParse(args[2], out int cursorSize))
 {
 CursorSize = cursorSize;
 }
 else
 {
 WriteLine($"Invalid cursor size '{args[2]}'. Please provide a valid integer size.");
 return; // stop running
 }
 }
 catch (PlatformNotSupportedException)
 {
 WriteLine("The current platform does not support changing the size of the cursor.");
 }
 catch (Exception ex)
 {
WriteLine($"An error occurred: {ex.Message}");
 }
 }
 }
}