const app = require("./src/app")
const connectTODb = require("./src/config/database")
require('dotenv').config()



connectTODb()
app.listen(3000, () => {
    console.log("server is running at port 3000");
})
