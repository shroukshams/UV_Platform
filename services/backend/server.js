const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/api/v1/process-candidate', async (req, res) => {
    try {
        // الاتصال باستخدام اسم الخدمة في Docker
        const response = await axios.post('http://ai-service:5000/analyze-cv', req.body );
        res.json({
            status: "Connected to AI Service",
            results: response.data
        });
    } catch (error) {
        res.status(500).json({
            status: "Error",
            message: "Could not reach AI Service",
            details: error.message
        });
    }
});

app.listen(3000, () => console.log('VU Backend active on port 3000'));
