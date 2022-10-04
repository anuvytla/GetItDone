const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const db = require("./config/connection");

const mongoose = require("mongoose");
const { typeDefs, resolvers } = require("./schema");

mongoose.set("debug", true);
const PORT = process.env.PORT || 3001;

const app = express();

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.once("open", async () => {
	await server.start();
	server.applyMiddleware({ app });

	app.listen(PORT, () => {
		console.log(`Server online at port ${PORT}`);
	});
});
