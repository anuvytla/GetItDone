const express = require("express");
<<<<<<< HEAD
const path = require("path");
const { ApolloServer } = require("apollo-server-express");

const db = require("./config/connection");

const mongoose = require("mongoose");
=======
const { ApolloServer } = require("apollo-server-express");
const path = require('path');
const { authMiddleware } = require('./utils/auth');

>>>>>>> c82ecd4571f3162a84bb7439167044a9ec54bec1
const { typeDefs, resolvers } = require("./schema");
const db = require("./config/connection");
const mongoose = require("mongoose");

mongoose.set("debug", true);
const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: authMiddleware,
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'production') {
<<<<<<< HEAD
	app.use(express.static(path.join(__dirname, '../client/build')));
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, '../client/build/index.html'))
	});

}

db.once("open", async () => {
	await server.start();
	server.applyMiddleware({ app });
=======
  app.use(express.static(path.join(__dirname, '../client/build')));
}
>>>>>>> c82ecd4571f3162a84bb7439167044a9ec54bec1

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};
  
// Call the async function to start the server
startApolloServer(typeDefs, resolvers);

// db.once("open", async () => {
// 	await server.start();
// 	server.applyMiddleware({ app });

// 	app.listen(PORT, () => {
// 		console.log(`Server online at port ${PORT}`);
// 	});
// });
