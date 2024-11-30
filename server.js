const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const router = express.Router();

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Sample Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
 

// Example GET route
router.get('/api/example', (req, res) => {
  res.json({ message: 'Hello from API' });
});

module.exports = router;
