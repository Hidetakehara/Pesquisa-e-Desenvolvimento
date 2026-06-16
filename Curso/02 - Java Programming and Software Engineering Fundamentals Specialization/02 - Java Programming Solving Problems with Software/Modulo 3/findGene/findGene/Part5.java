
/**
 * Escreva a descrição da classe Part5 aqui.
 * 
 * @author (seu nome) 
 * @version (número de versão ou data)
 */
public class Part5 {
    
    public String findGene(String dna) {
        int startIndex = dna.indexOf("ATG");
        int currIndex = dna.indexOf("TAA", startIndex +3);
        
        while (currIndex != -1){
            
            if((currIndex - startIndex)%3==0){
                return dna.substring (startIndex, currIndex +3);
            }
            
            else{
                currIndex = dna.indexOf("TAA", currIndex +1);
            }
            
        }
        return "";
    }
    
        // Método de teste
    public static void testsFindGene() {
        Part5 part5 = new Part5();
        
        String dna1 = "AATGCGTAATTAACG";   // contém ATG e TAA em múltiplos de 3
        String dna2 = "AATGCGTACGTTAGC";   // não contém TAA
        String dna3 = "ATGAAATGAAAA";      // contém ATG mas sem TAA
        
        System.out.println("DNA 1: " + dna1);
        System.out.println("Gene encontrado: " + part5.findGene(dna1));
        
        System.out.println("DNA 2: " + dna2);
        System.out.println("Gene encontrado: " + part5.findGene(dna2));
        
        System.out.println("DNA 3: " + dna3);
        System.out.println("Gene encontrado: " + part5.findGene(dna3));
    }

}
