const express = require('express');
const app = express();
const countryRoutes = require('./routes/countryRoutes');

app.use(express.json());
app.use('/', countryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});

module.exports = app;
