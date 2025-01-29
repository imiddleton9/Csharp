// Shape interface
interface Shape {
    void draw();
    }
    // Square class
    class aSquare implements Shape {
    @Override
    public void draw() {
    System.out.println("Drawing a square");
    }
    }
    // Triangle class
    class aTriangle implements Shape {
    @Override
    public void draw() {
    System.out.println("Drawing a triangle");
    }
    }
    // Circle class
    class aCircle implements Shape {
    @Override
    public void draw() {
    System.out.println("Drawing a circle");
    }
    }
    // Artist class using polymorphism
    class Artist {
    public void drawYourself(Shape shape) {
    shape.draw();
    }
    }
    // Main class
    public class PolyCircle {
    public static void main(String[] args) {
    Artist anArtist = new Artist();
    // Drawing a Square
    aSquare aSquare = new aSquare();
    anArtist.drawYourself(aSquare);
    // Drawing a Triangle
    aTriangle aTriangle = new aTriangle();
    anArtist.drawYourself(aTriangle);
    // Drawing a Circle
    aCircle aCircle = new aCircle();
    anArtist.drawYourself(aCircle);
    }
    }