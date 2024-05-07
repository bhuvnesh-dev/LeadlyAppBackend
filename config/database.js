const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb+srv://bhuvneshupworkdev:RtIiLCrguFnfnNbE@cluster0.nbubx7u.mongodb.net/?retryWrites=true&w=majority", {
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;