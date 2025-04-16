// pages/api/submit.js
import axios from 'axios';
import FormData from 'form-data'; 

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, message, telegram } = req.body;

    // Create form-data object and append fields
    const formData = new FormData();
    formData.append("b1-2", name);
    formData.append("b1-5", email);
    formData.append("b1-3", message);
    formData.append("b1-6", telegram);

    try {
        const response = await axios.post(
            'https://dev.quecko.com/wp-json/bitform/v1/entry/1',
            formData,
            {
                headers: {
                    ...formData.getHeaders(), // important to set correct form-data headers
                    "BitForm-API-Key": "59971a5c6213ecbb4e58bf91b4a56962f05311d8",
                },
            }
        );

        return res.status(200).json({ success: true, data: response.data });

    } catch (error) {
        console.error('Submission error:', error.response?.data || error.message);

        return res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.response?.data || error.message,
        });
    }
}
