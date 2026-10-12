function createResponse() {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from GitHub_CICD_承認OK"})
  };
}

exports.handler = async (event) => {
  return createResponse();
};

module.exports = { createResponse, handler: exports.handler };