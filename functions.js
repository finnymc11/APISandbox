import { app } from "@azure/functions";

app.http('HelloWorld', {
  methods: ['GET'],
  authLevel: 'anonymous',
  route: 'helloworld',
  handler: async (request, context) => {
    return { body: 'hello world' };
  }
});