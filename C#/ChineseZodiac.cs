using System;
public class ChineseZodiac
{
 public static void Main(string[] args)
 {
 Console.Write("Enter a year: ");
 int year = Convert.ToInt32(Console.ReadLine());
 string animal = GetChineseZodiacAnimal(year);
 Console.WriteLine(animal);
 }
 public static string GetChineseZodiacAnimal(int year)
 {
 return (year % 12) switch
 {
 0 => "monkey",
 1 => "rooster",
 2 => "dog",
 3 => "pig",
 4 => "rat",
 5 => "ox",
 6 => "tiger",
 7 => "rabbit",
 8 => "dragon",
 9 => "snake",
 10 => "horse",
 11 => "sheep",
 _ => throw new ArgumentException("Invalid year"),
 };
 }
}