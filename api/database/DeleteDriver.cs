using MySql.Data.MySqlClient;
using mis321pa3.api.interfaces;

namespace mis321pa3.api.database
{
    public class DeleteDriver : IDeleteDriver
    {
        public static void DropDriverTable(){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;   
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"DROP TABLE IF EXISTS drivers";

            using var cmd = new MySqlCommand(stm, con);

            cmd.ExecuteNonQuery();
        }
        void IDeleteDriver.DeleteDriver(int id)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"UPDATE drivers SET isDeleted = 1 WHERE id = @id";

            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@id", id);

            cmd.Prepare();
            
            cmd.ExecuteNonQuery();
        }
        
        

    }
}