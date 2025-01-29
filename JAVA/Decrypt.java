import java.io.*;
import java.nio.charset.StandardCharsets;

public class Decrypt {

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
     * Decrypts the ciphertext file and writes the plaintext to the output file.
     *
     * @param inputFile  Path to the ciphertext file.
     * @param outputFile Path to the plaintext file.
     * @param seed       Seed for the PRNG.
     */
    public static void decryptFile(String inputFile, String outputFile, long seed) {
        LCG prng = new LCG(seed);

        try (BufferedReader reader = new BufferedReader(new InputStreamReader(new FileInputStream(inputFile), StandardCharsets.UTF_8));
             BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(outputFile), StandardCharsets.UTF_8))) {

            String line;
            while ((line = reader.readLine()) != null) {
                String[] encryptedCPs = line.trim().split("\\s+");
                StringBuilder decryptedLine = new StringBuilder();
                for (String cpStr : encryptedCPs) {
                    try {
                        int ciphertextCP = Integer.parseInt(cpStr);
                        long key = prng.next() % 0x110000; // Ensure key is within Unicode range
                        int plaintextCP = ciphertextCP ^ (int) key;
                        decryptedLine.append((char) plaintextCP);
                    } catch (NumberFormatException e) {
                        System.err.println("Warning: Skipping invalid ciphertext code point '" + cpStr + "'.");
                    } catch (Exception e) {
                        System.err.println("An error occurred while decrypting: " + e.getMessage());
                    }
                }
                writer.write(decryptedLine.toString());
                writer.newLine();
            }

            System.out.println("Decryption successful. Decrypted data written to '" + outputFile + "'.");

        } catch (FileNotFoundException e) {
            System.err.println("Error: File '" + inputFile + "' not found.");
        } catch (IOException e) {
            System.err.println("An I/O error occurred during decryption: " + e.getMessage());
        }
    }

    public static void main(String[] args) {
        // Define the seed (must be the same as used in encryption)
        long SEED = 123456789L; // Example seed; ensure it matches the encryption seed

        // Define input and output files
        String INPUT_FILE = "secret";
        String OUTPUT_FILE = "message.txt";

        // Decrypt the file
        decryptFile(INPUT_FILE, OUTPUT_FILE, SEED);
    }
}
