const { app } = require("@azure/functions");

app.http("HelloWorld", {
  methods: ["GET"],
  authLevel: "anonymous",
  route: "helloworld",
  handler: async (request, context) => {
    return {
      status: 200,
      body: "hello world"
    };
  }
});
