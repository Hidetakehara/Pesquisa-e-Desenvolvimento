
/**
 * Escreva a descrição da classe part5 aqui.
 * 
 * @author (seu nome) 
 * @version (número de versão ou data)
 */

import java.io.*;
import java.net.*;

public class part5 {

    public void findYouTubeLinks() throws Exception {
        URL url = new URL("http://www.dukelearntoprogram.com/course2/data/manylinks.html");
        BufferedReader reader = new BufferedReader(new InputStreamReader(url.openStream()));
        
        String line;
        while ((line = reader.readLine()) != null) {
            String lower = line.toLowerCase();
            int index = lower.indexOf("youtube.com");
            if (index != -1) {
                int startQuote = line.lastIndexOf("\"", index);
                int endQuote = line.indexOf("\"", index + 1);
                if (startQuote != -1 && endQuote != -1) {
                    String link = line.substring(startQuote + 1, endQuote);
                    System.out.println("Link encontrado: " + link);
                }
            }
        }
        reader.close();
    }
    
    public static void main(String[] args) throws Exception {
        Part4 p = new Part4();
        p.findYouTubeLinks();
    }
}

