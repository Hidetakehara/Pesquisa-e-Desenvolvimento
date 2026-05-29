
/**
 * Escreva a descrição da classe FindGeneSimpleAndTest aqui.
 * 
 * @author (seu nome) 
 * @version (número de versão ou data)
 */

public class Part2 {

    public String findSimpleGene(String dna, String start, String stop){
        // start codon is "ATG"
        // stop codn is "TAA"
        String result = "";
        int startIndex = dna.indexOf(start);
        
        if (startIndex == -1){ // no ATG
            return "";
        }
        
        int stopIndex = dna.indexOf(stop , startIndex+3);
        
        if (stopIndex == -1){ // no ATG
            return "";
        }      
        
        if ((stopIndex - startIndex) % 3 == 0) {
            result = dna.substring(startIndex, stopIndex + 3);
            return result;
        } else {
            return "";
        }
    
    }
    
    public void testFindGeneSimple(){
        String dna;
        String startCondon = "AAT";
        String stopCondon = "GGT";

        dna = "AATGCGTAATATGGT"; // sem gene válido
        System.out.println("DNA strand is " + dna);
        System.out.println("Gene is " + findSimpleGene(dna, startCondon, stopCondon) + "\n");

        dna = "ACTAGGGTAATATGGT"; // sem ATG
        System.out.println("DNA strand is " + dna);
        System.out.println("Gene is " + findSimpleGene(dna, startCondon, stopCondon) + "\n");

        dna = "ATCCTATGCTTCGGCTGCTCTATGGT"; // sem TAA
        System.out.println("DNA strand is " + dna);
        System.out.println("Gene is " + findSimpleGene(dna, startCondon, stopCondon) + "\n");

        dna = "ATGGGTTAAGTC"; // gene válido
        System.out.println("DNA strand is " + dna);
        System.out.println("Gene is " + findSimpleGene(dna, startCondon, stopCondon) + "\n");

        dna = "ATGCGTAAGTC"; // gene inválido (não múltiplo de 3)
        System.out.println("DNA strand is " + dna);
        System.out.println("Gene is " + findSimpleGene(dna, startCondon, stopCondon) + "\n");
        
        dna = "AAATGCCCTAACTAGATTAAGAAACC"; 
        System.out.println("DNA strand is " + dna);
        System.out.println("Gene is " + findSimpleGene(dna, startCondon, stopCondon) + "\n");
    }
}
