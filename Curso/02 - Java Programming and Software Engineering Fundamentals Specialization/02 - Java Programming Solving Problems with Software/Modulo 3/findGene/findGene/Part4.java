
/**
 * Escreva a descrição da classe Part4 aqui.
 * 
 * @author (seu nome) 
 * @version (número de versão ou data)
 */

import edu.duke.*;

public class Part4 {
    
    public void findYouTubeLinks() {
        URLResource resource = new URLResource("http://www.dukelearntoprogram.com/course2/data/manylinks.html");
        
        for (String word : resource.words()) {
            String wordLower = word.toLowerCase();
            
            int youtubeIndex = wordLower.indexOf("youtube.com");
            if (youtubeIndex != -1) {
                // Encontrar aspas antes e depois
                int startQuote = word.lastIndexOf("\"", youtubeIndex);
                int endQuote = word.indexOf("\"", youtubeIndex + 1);
                
                if (startQuote != -1 && endQuote != -1) {
                    String url = word.substring(startQuote + 1, endQuote);
                    System.out.println(url);
                }
            }
        }
    }
    
    public void teste() {
        // Chama o método que já imprime os links
        findYouTubeLinks();
    }
    
    // Adicione este main para rodar direto no BlueJ
    public static void main(String[] args) {
        Part4 p = new Part4();
        p.teste();
    }
}


