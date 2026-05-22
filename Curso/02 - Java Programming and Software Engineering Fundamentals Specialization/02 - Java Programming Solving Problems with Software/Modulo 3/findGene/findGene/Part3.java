
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
}
