var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'o2olb7w3xv09alub.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'fz68979soeqomim4', 
  password: 'pn1jva7oc3zdlmpj', 
  database: 'molga4fog3ul6cp2',
})
connection.connect((err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Database connected')
})
module.exports = connection