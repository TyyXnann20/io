public class Student{
    int id;
    String name;
    String dep;
    
    public Student(int id, String name){
        this.id = id;
        this.name = name;
       
    }
    public void setID(int id){
        this.id = id;
    }
    public void setName(String name){
        this.name = name;
    }
  
    
    public int getID(int id){
        return id;
    }
    public String getName(String name){
        return name;
    }
    // public String getDep(String dep){
    //     return dep;
    // }

    //Header and Print
    public String displayResult(){
        return ("ID:" + this.getID() + ", Name:" + this.getName());
    }

    public static void main (String[] args){

        Student obj = new Student(1001, "Noun SreyNann");
        System.out.println(obj.displayResult());

    }
}