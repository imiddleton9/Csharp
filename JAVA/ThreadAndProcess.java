import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ThreadAndProcess {

    static class MyThread extends Thread {
        @Override
        public void run() {
            for (int i = 0; i < 5; i++) {
                System.out.println("Thread running iteration " + (i + 1));
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            System.out.println("Thread done");
        }
    }

    public static void executeProcess() {
        try {
            ProcessBuilder processBuilder = new ProcessBuilder("cmd.exe", "/c", "dir");;
            
            Process process = processBuilder.start();
            System.out.println("Process: Started execution");

            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println("Process Output: " + line);
            }

            int exitCode = process.waitFor();
            System.out.println("Process finished with exit code " + exitCode);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.start();

        executeProcess();

        try {
            thread.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Completed");
    }
}
