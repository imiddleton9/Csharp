import java.nio.ByteBuffer;

public class BlockCipher {

    // Define the encryption key (64 bits)
    private static final long KEY = 0xFF4FF4F00F444004L;

    public static void main(String[] args) {
        String plaintext = "Hello, World!"; // Example plaintext
        byte[] encrypted = encrypt(plaintext);
        
        System.out.println("Encrypted data in hexadecimal:");
        for (byte b : encrypted) {
            System.out.printf("%02X ", b);
        }
    }

    // Encrypt method that processes the plaintext
    public static byte[] encrypt(String plaintext) {
        // Convert the plaintext to bytes
        byte[] plaintextBytes = plaintext.getBytes();
        
        // Calculate the number of blocks (64 bits = 8 bytes)
        int blockSize = 8;
        int numBlocks = (plaintextBytes.length + blockSize - 1) / blockSize;
        
        // Create an array to hold the encrypted data
        byte[] encryptedData = new byte[numBlocks * blockSize];
        
        // Process each block
        for (int i = 0; i < numBlocks; i++) {
            // Create a buffer for the current block
            ByteBuffer blockBuffer = ByteBuffer.allocate(blockSize);
            // Fill the block with the corresponding bytes from the plaintext or padding
            for (int j = 0; j < blockSize; j++) {
                if (i * blockSize + j < plaintextBytes.length) {
                    blockBuffer.put(plaintextBytes[i * blockSize + j]);
                } else {
                    blockBuffer.put((byte) 0x00); // Padding with x00
                }
            }

            // Encrypt the block using XOR with the key
            long block = blockBuffer.getLong(0);
            long encryptedBlock = block ^ KEY;

            // Store the encrypted block back into the encryptedData array
            ByteBuffer.wrap(encryptedData, i * blockSize, blockSize).putLong(encryptedBlock);
        }

        return encryptedData;
    }
}
