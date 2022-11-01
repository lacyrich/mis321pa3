using MySql.Data.MySqlClient;
using mis321pa3.api.interfaces;

namespace mis321pa3.api.database
{
    public class UpdateDriverRating : IUpdateDriverRating
    {
        void IUpdateDriverRating.UpdateDriverRating(int id)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"UPDATE drivers SET rating = 5 WHERE id = @id";

            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@id", id);

            cmd.Prepare();
            
            cmd.ExecuteNonQuery();
        }
    }
}