namespace mis321pa3.api
{
    public class ConnectionString
    {
        public string cs {get;set;}

        public ConnectionString(){
            string server = "o2olb7w3xv09alub.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
            string database = "molga4fog3ul6cp2";
            string port = "3306";
            string userName = "fz68979soeqomim4";
            string password = "pn1jva7oc3zdlmpj";

            cs = $@"server={server};user={userName};database={database};port={port};password={password};";
        }
    }

    
}