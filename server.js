const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/catalog', async (req, res) => {
  try {
    const response = await axios.get('https://catalog.roblox.com/v1/search/items', {
      params: req.query
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener datos del catálogo' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy activo en puerto ${PORT}`));
