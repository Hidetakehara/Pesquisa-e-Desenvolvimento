
/**
 * Escreva a descrição da classe Part3 aqui.
 * 
 * @author (seu nome) 
 * @version (número de versão ou data)
 */

public class Part3 {
    
    public boolean twoOccurrences (String stringa, String stringb){
        
        int firstIndex = stringb.indexOf(stringa);
        if (firstIndex == -1) return false;

        int secondIndex = stringb.indexOf(stringa, firstIndex + stringa.length());
        return secondIndex != -1;
    }
    
    public String lastPart(String stringa, String stringb) {
        int index = stringb.indexOf(stringa);
        if (index == -1) {
            return stringb;
        }
        return stringb.substring(index + stringa.length());
    }
    
    public void teste (){
        // Casos de teste para twoOccurrences
        String a1 = "by";
        String b1 = "A story by Abby Long";
        System.out.println("stringa: " + a1 + ", stringb: " + b1);
        System.out.println("Resultado: " + twoOccurrences(a1, b1));
        
        String a2 = "a";
        String b2 = "banana";
        System.out.println("stringa: " + a2 + ", stringb: " + b2);
        System.out.println("Resultado: " + twoOccurrences(a2, b2));
        
        String a3 = "atg";
        String b3 = "ctgtatgta";
        System.out.println("stringa: " + a3 + ", stringb: " + b3);
        System.out.println("Resultado: " + twoOccurrences(a3, b3));
        
        // Testando lastPart
        System.out.println("A parte do final após 'an' em 'banana' é: " + lastPart("an", "banana"));
        System.out.println("A parte do final após 'zoo' em 'forest' é: " + lastPart("zoo", "forest"));
    }    

}


