const { app } = require("@azure/functions");

async function HTTPHello(request, context) {
  context.log(`HTTPHello function processed a request for URL: ${request.url}`);

  let name = request.query.get("name");
  if (!name) {
    try {
      const body = await request.json().catch(() => null);
      name = body && body.name;
    } catch {
      // ignore body parse errors
    }
  }

  const message = name
    ? `Hello, ${name}. This HTTP triggered function executed successfully.`
    : "This HTTP triggered function executed successfully. Pass a 'name' in the query string or request body for a personalized response.";

  return {
    status: 200,
    body: message
  };
}

app.http("HTTPHello", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: HTTPHello
});