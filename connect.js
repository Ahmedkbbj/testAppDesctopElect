require('./renderer.js')
function conn()
{
    var mysql = require('mysql')
    
    // Add the credentials to access your database
    var connection = mysql.createConnection({
        host     : 'sql11.freemysqlhosting.net',
        user     : 'sql11195481',
        password : 'rRN1EFLRrZ',
        database : 'sql11195481'
    })
    
    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code)
            console.log(err.fatal)
        }
    })
    return connection
}