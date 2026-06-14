function createResponse() {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from RUIKO " })
  };
}

exports.handler = async (event) => {
  return createResponse();
};

module.exports = { createResponse, handler: exports.handler };