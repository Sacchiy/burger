//connect to connection.js file
var connection = require("./connection.js");

var orm = {

    selectAll: function(callback) {
        var s = "SELECT * FROM burgers" + tableName;
    
        connection.query(s, function(err, result) {
            if(err){
                throw err;
            }
            callback(result);
    
        });
      },

    insertOne: function(callback) {
        var s = "INSERT INTO" + tableName;

        s += " (";
        s += cols.toString();
        s += ") ";
        s += "VALUES (";
        s += printQuestionMarks(vals.length);
        s += ") ";

        connection.add(s, function(err, result){
            if(err){
                throw err;
            }
            callback(result);
        });
    },

    updateOne: function(callback){
        var s = "UPDATE" + tableName;

        s += " SET ";
        s += objToSql(objColVals);
        s += " WHERE ";
        s += condition;

        connection.query (s, function(err, result){
            if (err) {
                throw err;
              }
        
            callback(result);
        });
    }
}

module.exports = orm;
