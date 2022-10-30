using mis321pa3.database;
using mis321pa3.interfaces;

namespace mis321pa3.models
{
    public class Driver 
    {
        public string DriverName {get; set;}
        public int Rating {get; set;}
        public System.DateTime DateHired {get; set;}
        
        public IDeleteDriver Deleted {get; set;}
        
        public ISaveDriver Save {get; set;}

        public Driver(){
            DriverName = "";
            Rating = 0;
            DateHired = System.DateTime.Now;
            Deleted = new DeleteDriver();
            Save = new SaveDriver();
        }
    }
}