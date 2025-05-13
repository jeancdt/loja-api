// Importa o framework Express
const express = require('express');

// Importa o controller responsável por gerenciar as ações de produtos
const ProducController = require('../controllers/productController.js');

// Cria uma nova instância de roteador do Express
const router = express.Router();

// Define as rotas
router.get('/', ProducController.getAll);
router.post('/', ProducController.create);
router.put('/:id', ProducController.update);
router.delete('/:id', ProducController.remove);

// Exporta o roteador configurado para ser usado no app principal
module.exports = router;