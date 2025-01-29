import java.util.Random;
import java.text.SimpleDateFormat;
import java.util.Date;

public class LogicBomb {

    public static void main(String[] args) {
        Random random = new Random();
        int count = 0;

        // Get current date in ddMMyyyy format
        SimpleDateFormat sdf = new SimpleDateFormat("ddMMyyyy");
        String currentDate = sdf.format(new Date());

        System.out.println("Current date (ddMMyyyy): " + currentDate); // Print current date for reference

        // Define range close to the current date
        int lowerBound = 4100000;  // Closest smaller range start
        int upperBound = 4200000;  // Closest larger range end

        while (true) {
            // Generate a random number within the closer range
            int randomNumber = lowerBound + random.nextInt(upperBound - lowerBound); // Range from lowerBound to upperBound
            String randomNumberStr = String.format("%08d", randomNumber); // Format to 8 digits

            count++; // Increase counter

            // Print the generated random number for debugging
            System.out.println("Generated number: " + randomNumberStr);

            // Check if the generated number matches the current date
            if (randomNumberStr.equals(currentDate)) {
                // Display the message 5 times
                for (int i = 0; i < 5; i++) {
                    System.out.println("Today is " + currentDate + "! The count is: " + String.format("%04d", count));
                }
                break; // Exit loop after finding the match
            }

            // // Optional: Sleep for a short time to reduce CPU usage
            // try {
            //     Thread.sleep(100); // Sleep for 100 milliseconds
            // } catch (InterruptedException e) {
            //     Thread.currentThread().interrupt();
            //     break;
            // }
        }
    }
}

