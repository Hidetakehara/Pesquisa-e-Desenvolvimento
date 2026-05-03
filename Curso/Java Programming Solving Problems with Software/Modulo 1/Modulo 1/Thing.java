
/**
 * Escreva uma descrição da classe HellowWorld aqui.
 * 
 * @author (seu nome) 
 * @version (um número da versão ou uma data)
 */
public class Thing
{
    // variáveis de instância - substitua o exemplo abaixo pelo seu próprio
    private int a;

    /**
     * Construtor para objetos da classe HellowWorld
     */
    public Thing(int x){
        // inicializa variáveis de instância
        a = x;
    }

    /**
     * Um exemplo de um método - substitua este comentário pelo seu próprio
     * 
     * @param  y   um exemplo de um parâmetro de método
     * @return     a soma de x e y 
     */
    public int geta(int y)
    {
        // escreva seu código aqui
        return a;
    }
    
    public void combine (Thing y){
        a = a + y.geta();
    }
}

Thing f = new Thing(6);
Thing g = new Thing(8);
f.combine(g);
System.outprintln(f.geta());
System.outprintln(g.geta());

