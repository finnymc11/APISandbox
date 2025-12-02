module.exports = async function (context, req) {
    // Optional: log something to Application Insights
    context.log('Health check function processed a request.');

    const responseBody = {
        status: "ok",
        app: "finbar-app",
        region: "eastus2",
        timestamp: new Date().toISOString()
    };

    context.res = {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: responseBody
    };
};