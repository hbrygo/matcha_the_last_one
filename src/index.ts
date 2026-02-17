import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 80;

app.use(express.static(path.join(__dirname, '..', 'template', 'image'))); // expose template/*
app.use(express.static(path.join(__dirname, '..', 'template', 'html'))); // expose template/*
app.use(express.static(path.join(__dirname, '..', 'template', 'css'))); // expose template/*
app.use(express.static(path.join(__dirname, '..', 'template', 'js'))); // expose template/*

app.get('/', (req, res) => { res.sendFile(path.join(__dirname, 'index.html')); });
app.get('/index', (req, res) => { res.sendFile(path.join(__dirname, 'index.html')); });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
