using mis321pa3.api.models;
using MySql.Data.MySqlClient;
namespace mis321pa3.api.DataAccess
{
    public class DriverDataAccess
    {
        public List<Driver> GetAll()
        {
            List<Driver> drivers = new List<Driver>();
            ConnectionString connectionString = new ConnectionString();
            string cs = connectionString.cs;

            MySqlConnection con = new MySqlConnection();
            con.Open();

            string stm = "@SELECT * from drivers";

            MySqlCommand cmd = new MySqlCommand(stm, con);
            MySqlDataReader rdr = cmd.ExecuteReader();

            while(rdr.Read()){
                System.Console.WriteLine(rdr.GetString(0)+ " " + rdr.GetInt32(1));
                Driver newDriver = new Driver()
                {DriverName = rdr.GetString(0), Rating = rdr.GetInt32(1)};
                drivers.Add(newDriver);
            }
            con.Close();

            return drivers;
        }
    }

}