const server = require('./server');

const PORT = process.env.PORT || 3000;

server.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Server started on port ${PORT}`);
});
