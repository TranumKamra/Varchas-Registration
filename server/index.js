require("dotenv").config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const preregistrationrouter = require('./routes/preregistration.js');
app.get('/', (req, res) => res.send('/preregistrationrouter ---> preregistrationrouter data'));
const corsOptions = {
  origin: "https://varchas-preregistration.onrender.com"
}
app.use(express.json());
app.use(cors(corsOptions));
app.use('/pre-registration', preregistrationrouter);
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(async () => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const port =process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));
