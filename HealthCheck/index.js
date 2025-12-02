module.exports = async function (context, req) {
    context.log('HealthCheck function invoked.');

    const responseBody = {
        status: "ok",
        app: "finbar-app",
        region: "eastus2",
        message: "Hello from Azure Functions + GitHub!",
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
