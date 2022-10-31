using MySql.Data.MySqlClient;
using mis321pa3.interfaces;
using mis321pa3.models;

namespace mis321pa3.database
{
    public class SaveDriver : ISaveDriver
    {
        public static void CreateDriverTable(){
        ConnectionString myConnection = new ConnectionString();
        string cs = myConnection.cs;
        using var con = new MySqlConnection(cs);
        con.Open();

        string stm = @"CREATE TABLE drivers(id INTEGER PRIMARY KEY AUTO_INCREMENT, driverName TEXT, rating INTEGER, dateHired DATETIME, isDeleted INTEGER)";

        using var cmd = new MySqlCommand(stm, con);

        cmd.ExecuteNonQuery();
    }
        public void CreateDriver(Driver myDriver)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"INSERT INTO drivers(driverName, rating, dateHired, isDeleted) VALUES(@driverName, @rating, @dateHired, @isDeleted)";

            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@driverName", myDriver.DriverName);
            cmd.Parameters.AddWithValue("@rating", myDriver.Rating);
            cmd.Parameters.AddWithValue("@dateHired", myDriver.DateHired);
            cmd.Parameters.AddWithValue("@isDeleted", myDriver.Deleted);

            cmd.Prepare();
            
            cmd.ExecuteNonQuery();
        }

        public void ShowDrivers(Driver myDriver){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"SELECT driverName from drivers WHERE isDeleted = 0  VALUES(@driverName, @rating";

            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@driverName", myDriver.DriverName);
            cmd.Parameters.AddWithValue("@rating", myDriver.Rating);
            

            cmd.Prepare();
            
            cmd.ExecuteNonQuery();
        }
        void ISaveDriver.SaveDriver(Driver myDriver)
        {
            throw new System.NotImplementedException();
        }

        
    }
}