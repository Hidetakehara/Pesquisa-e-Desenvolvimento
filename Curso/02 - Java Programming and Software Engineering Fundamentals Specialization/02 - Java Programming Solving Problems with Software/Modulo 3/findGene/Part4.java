
/**
 * Escreva a descrição da classe Part4 aqui.
 * 
 * @author (seu nome) 
 * @version (número de versão ou data)
 */

import edu.duke.*;

public class Part4 {

    public void findYouTubeLinks() {
        URLResource resource = new URLResource("https://www.dukelearntoprogram.com/course2/data/manylinks.html");
        String texto = "youtube.com";
                
        for (String line : resource.lines()) {   // <-- usar lines() em vez de words()
            String lowerLine = line.toLowerCase();     
            int youtubeIndex = lowerLine.indexOf(texto);
            
            //System.out.println(line);            
            //System.out.println(youtubeIndex);
            //System.out.println("Estou aqui");
            
            if (youtubeIndex != -1) {
                int startQuote = line.lastIndexOf("\"", youtubeIndex);
                int endQuote = line.indexOf("\"", youtubeIndex + 1);
                
                //System.out.println("Estou aqui");
                
                if (startQuote != -1 && endQuote != -1) {
                    String url = line.substring(startQuote + 1, endQuote);
                    System.out.println("Link encontrado: " + url);
                    
                    //System.out.println("Estou aqui");
                }
            }
        }
    }
    
    public void teste1() {
        // Chama o método que já imprime os links
        findYouTubeLinks();
    }

}
