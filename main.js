const http = require("node:http");
const { Client } = require("pg");

// Create an HTTP server
const server = http.createServer(async (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain", 'Access-Control-Allow-Origin': '*' });
  console.log("passei por aqui");
  
  const client = new Client({
    host: "postgres",
    port: 5432,
    database: "default",
    user: "postgres",
    password: "postgres",
  });

  await client.connect();

  let body = [];
  req
    .on("data", (chunk) => {
      body.push(chunk);
    })
    .on("end", async () => {
      body = Buffer.concat(body).toString();
      const { login, password } = JSON.parse(body);
      console.log(password);
      const queryResult = await client.query(`SELECT * FROM users WHERE login = '${login}' AND password = '${password}'`);
      
      console.log(queryResult.rows[0]);
    
      res.end("okay");

      await client.end();
    });
});

// Now that server is running
server.listen(8080, "0.0.0.0", () => {
  console.log("Server running");
});
