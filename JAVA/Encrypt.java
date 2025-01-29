import java.io.*;
import java.nio.charset.StandardCharsets;

public class Encrypt {

    /**
     * Linear Congruential Generator (LCG) for pseudorandom number generation.
     */
    static class LCG {
        private final long modulus = (long) Math.pow(2, 32);
        private final long a = 1103515245;
        private final long c = 12345;
        private long state;

        public LCG(long seed) {
            this.state = seed;
        }

        /**
         * Generates the next pseudorandom number.
         *
         * @return Next pseudorandom number.
         */
        public long next() {
            state = (a * state + c) % modulus;
            return state;
        }
    }

    /**
     * Encrypts the input file and writes the ciphertext to the output file.
     *
     * @param inputFile  Path to the plaintext file.
     * @param outputFile Path to the ciphertext file.
     * @param seed       Seed for the PRNG.
     */
    public static void encryptFile(String inputFile, String outputFile, long seed) {
        LCG prng = new LCG(seed);

        try (BufferedReader reader = new BufferedReader(new InputStreamReader(new FileInputStream(inputFile), StandardCharsets.UTF_8));
             BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(outputFile), StandardCharsets.UTF_8))) {

            String line;
            while ((line = reader.readLine()) != null) {
                StringBuilder encryptedLine = new StringBuilder();
                for (char ch : line.toCharArray()) {
                    int plaintextCP = (int) ch;
                    long key = prng.next() % 0x110000; // Ensure key is within Unicode range
                    int ciphertextCP = plaintextCP ^ (int) key;
                    encryptedLine.append(ciphertextCP).append(" ");
                }
                // Remove trailing space and add newline
                if (encryptedLine.length() > 0) {
                    encryptedLine.setLength(encryptedLine.length() - 1);
                }
                writer.write(encryptedLine.toString());
                writer.newLine();
            }

            System.out.println("Encryption successful. Encrypted data written to '" + outputFile + "'.");

        } catch (FileNotFoundException e) {
            System.err.println("Error: File '" + inputFile + "' not found.");
        } catch (IOException e) {
            System.err.println("An I/O error occurred during encryption: " + e.getMessage());
        }
    }

    public static void main(String[] args) {
        // Define the seed (must be kept secure)
        long SEED = 123456789L; // Example seed; in practice, use a secure method to store and retrieve the seed

        // Define input and output files
        String INPUT_FILE = "letter.txt";
        String OUTPUT_FILE = "secret";

        // Encrypt the file
        encryptFile(INPUT_FILE, OUTPUT_FILE, SEED);
    }
}
