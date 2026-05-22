import edu.duke.*;
import java.io.File;

public class PerimeterRunner {
    
    public static void main (String[] args) {
        PerimeterRunner pr = new PerimeterRunner();
        pr.testPerimeter();
        pr.testPerimeterMultipleFiles();
    }
    
    public double getPerimeter (Shape s) {
        // Start with totalPerim = 0
        double totalPerim = 0.0;
        // Start wth prevPt = the last point 
        Point prevPt = s.getLastPoint();
        // For each point currPt in the shape,
        for (Point currPt : s.getPoints()) {
            // Find distance from prevPt point to currPt 
            double currDist = prevPt.distance(currPt);
            // Update totalPerim by currDist
            totalPerim = totalPerim + currDist;
            // Update prevPt to be currPt
            prevPt = currPt;
        }
        // totalPerim is the answer
        return totalPerim;
    }

    public void testPerimeter () {
        FileResource fr = new FileResource();
        Shape s = new Shape(fr);
        double length = getPerimeter(s);
        System.out.println("perimeter = " + length);
        
        int numPoints = getNumPoints(s);
        System.out.println("number of points = "+ numPoints);
        
        double averageLength = getAverageLength(s);
        System.out.println("average side length = " + averageLength);
        
        double largestSide = getLargestSide(s);
        System.out.println("largest side = " + largestSide);
        
        double largestX = getLargestX(s);
        System.out.println("largest X = " + largestX);
    }
   
    public int getNumPoints(Shape s) {
        int numPoints = 0;
        for (Point p : s.getPoints()){
            numPoints = numPoints + 1;
        }
        return numPoints;
    }
    
    public double getAverageLength(Shape s) {
        double totalPerim = getPerimeter(s);
        int numSides = getNumPoints(s);
        double average = totalPerim / numSides;
        return average;
    }
    
    public double getLargestSide(Shape s){
        double largestSide = 0.0;
        Point prevPt = s.getLastPoint();
        for (Point currPt:  s.getPoints()){
            double currDist = prevPt.distance(currPt);
            if (currDist > largestSide){
                largestSide = currDist;
            }
            prevPt = currPt;
        }
        return largestSide;
    }
    
    public double getLargestX(Shape s){
        double largestX = Double.MIN_VALUE;
        for (Point p : s.getPoints()){
            if (p.getX() > largestX) {
                largestX = p.getX();
            }
            }
        return largestX;
        }
        
    public File getFileWithLargestPerimeter() {
        double largestPerim = 0.0;
        File largestFile = null;
        DirectoryResource dr = new DirectoryResource();
    
        for (File f : dr.selectedFiles()) {
            FileResource fr = new FileResource(f);
            Shape s = new Shape(fr);
            double currPerim = getPerimeter(s);
        
            if (currPerim > largestPerim) {
                largestPerim = currPerim;
                largestFile = f; // guarda o arquivo
            }
        }
        return largestFile;
    }

    // Método que chama o cálculo e imprime o resultado
    public void testPerimeterMultipleFiles() {
        File largestFile = getFileWithLargestPerimeter();
        FileResource fr = new FileResource(largestFile);
        Shape s = new Shape(fr);
        double largestPerim = getPerimeter(s);

        System.out.println("Arquivo com maior perímetro: " + largestFile.getName());
        System.out.println("Maior perímetro = " + largestPerim);
    }
        
}

