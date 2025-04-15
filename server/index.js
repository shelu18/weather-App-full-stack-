const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Load env vars

const weatherRoutes = require('./routes/weatherRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json()); // to parse JSON body

// Routes
app.use('/api/weather', weatherRoutes);

app.get('/', (req, res) => {
    res.send('Server is running!');
  });
  

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
