// app.mjs
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;


// Route to handle file download
app.get('/', (req, res) => {
    const filePath = join(__dirname, 'public', 'REST-API-Design-Rulebook.pdf');
  
    // Send the file
    res.sendFile(filePath);
  });

// Serve static files from the 'public' directory
app.use(express.static(new URL('public', import.meta.url).pathname));

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});