var mysql = require('mysql');

var con = mysql.createConnection({
  host: "mysql1.csl.tjhsst.edu:3306",
  user: "site_tjtinder",
  password: "EktntpYTB7VYwPpeNHgtE4UN"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO Persons (FirstName, LastName, Email, Password) VALUES (document.getElementById("first_name").innerHTML, document.getElementById("last_name").innerHTML, document.getElementById("email").innerHTML, document.getElementById("password").innerHTML)"
  con.query(sql, [VALUES], function(err, result)) {
    if(err)throw err;
    console.log("Registered");
  });
});
