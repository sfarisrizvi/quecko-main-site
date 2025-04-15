
// import formidable from 'formidable';
// import fs from 'fs';
// import axios from 'axios';
// import FormData from 'form-data';

// // export const config = {
// //     api: {
// //         bodyParser: false,
// //     },
// // };

// export default async function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ message: 'Method Not Allowed' });
//     }

//     // const form = new formidable.IncomingForm();

//     // form.parse(req, async (err, fields, files) => {
//     //     if (err) {
//     //         console.log('Fields:', fields);
//     //         return res.status(500).json({ success: false, message: 'Form parse error' });
//     //     }

//     // console.log('Files:', files);
//     console.log('req: ', req.body);
//     try {
//         const { name, email, phone, jobTitle, file } = req?.body;
//         // const cvFile = files.cvFile;

//         const bitFormData = new FormData();
//         bitFormData.append('b2-2', name);
//         bitFormData.append('b2-5', email);
//         bitFormData.append('b2-6', fs.createReadStream(file.filepath), file.originalFilename);
//         bitFormData.append('b2-7', phone);
//         bitFormData.append('b2-8', jobTitle);

//         const response = await axios.post(
//             'https://dev.quecko.com/wp-json/bitform/v1/entry/2',
//             bitFormData,
//             {
//                 headers: {
//                     ...bitFormData.getHeaders(),
//                     'BitForm-API-Key': '59971a5c6213ecbb4e58bf91b4a56962f05311d8',
//                 },
//             }
//         );



//         return res.status(200).json({ success: true, data: response.data });
//     } catch (error) {
//         console.error('Submission error:', error.response?.data || error.message);
//         return res.status(500).json({ success: false, message: 'Server Error' });
//     }
//     // });
// }





////////////

// // import formidable from 'formidable';
// // import fs from 'fs';
// // import axios from 'axios';
// // import FormData from 'form-data';


// // export default async function handler(req, res) {
// //     if (req.method !== 'POST') {
// //         return res.status(405).json({ message: 'Method Not Allowed' });
// //     }

// //     // const form = new formidable.IncomingForm();

// //     // form.parse(req, async (err, fields, files) => {
// //     //     if (err) {
// //     //         console.log('Fields:', fields);
// //     //         return res.status(500).json({ success: false, message: 'Form parse error' });
// //     //     }
// //     console.log('req: ', req.body);
// //     try {
// //         const { name, email, phone, jobTitle } = req?.body;
// //         // const cvFile = files.cvFile;

// //         const bitFormData = new FormData();
// //         bitFormData.append('b2-2', name);
// //         bitFormData.append('b2-5', email);
// //         // bitFormData.append('b2-6', fs.createReadStream(cvFile.filepath), cvFile.originalFilename);
// //         bitFormData.append('b2-7', phone);
// //         bitFormData.append('b2-8', jobTitle);

// //         const response = await axios.post(
// //             'https://dev.quecko.com/wp-json/bitform/v1/entry/2',
// //             bitFormData,
// //             {
// //                 headers: {
// //                     ...bitFormData.getHeaders(),
// //                     'BitForm-API-Key': '59971a5c6213ecbb4e58bf91b4a56962f05311d8',
// //                 },
// //             }
// //         );



// //         return res.status(200).json({ success: true, data: response.data });
// //     } catch (error) {
// //         console.error('Submission error:', error.response?.data || error.message);
// //         return res.status(500).json({ success: false, message: 'Server Error' });
// //     }
// //     // });
// // }



import formidable from 'formidable';
import fs from 'fs';
import axios from 'axios';
import FormData from 'form-data';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const form = new formidable.IncomingForm({ maxFileSize: 10 * 1024 * 1024 });

    form.parse(req, async (err, fields, files) => {
        if (err) {
            console.error('Form parse error:', err);
            return res.status(500).json({ success: false, message: 'Form parse error' });
        }
        console.log('req: ', req.body);

        
        try {
            const { name, email, phone, jobTitle } = fields;
            const cvFile = files.cvFile;

            console.log('cvFile:', cvFile);

            const bitFormData = new FormData();
            bitFormData.append('b2-2', name);
            bitFormData.append('b2-5', email);
            bitFormData.append('b2-7', phone);
            bitFormData.append('b2-8', jobTitle);

            if (cvFile && cvFile.filepath) {
                bitFormData.append(
                    'b2-6',
                    fs.createReadStream(cvFile.filepath),
                    cvFile.originalFilename
                );
            }

            const response = await axios.post(
                'https://dev.quecko.com/wp-json/bitform/v1/entry/2',
                bitFormData,
                {
                    headers: {
                        ...bitFormData.getHeaders(),
                        'BitForm-API-Key': '59971a5c6213ecbb4e58bf91b4a56962f05311d8',
                    },
                }
            );
            console.log('req: ', req.body);


            return res.status(200).json({ success: true, data: response.data });
        } catch (error) {
            console.error('Submission error:', error.response?.data || error.message);
            return res.status(500).json({ success: false, message: 'Server Error' });
        }
    });
}
