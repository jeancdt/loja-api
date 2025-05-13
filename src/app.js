// Importa o framework Express, utilizado para criar o servidor HTTP e gerenciar rotas
const express = require('express');

// Importa o middleware que permite o compartilhamento de recursos entre diferentes origens (Cross-Origin Resource Sharing)
const cors = require('cors');

// Importa o middleware de segurança que adiciona cabeçalhos HTTP para proteger contra ataques comuns
const helmet = require('helmet');

// Importa as rotas relacionadas aos produtos
const productRoutes = require('./routes/productRoutes');

// Importa o middleware para tratamento centralizado de erros
const errorMiddleware = require('./middlewares/errorMiddleware');

// Cria uma instância do aplicativo Express
const app = express();

// Middlewares globais
// Habilita o CORS em todas as rotas da aplicação
app.use(cors());
// Adiciona proteção automática contra vulnerabilidades HTTP
app.use(helmet());
// Permite que o servidor interprete requisições com corpo em formato JSON
app.use(express.json());
// Rotas da aplicação
app.use('/products', productRoutes);

// Middleware de tratamento de erros (deve ser adicionado depois das rotas)
// Middleware que captura e trata erros, enviando respostas ao cliente
app.use(errorMiddleware);

// Exporta a aplicação configurada para ser utilizada pelo servidor (server.js)
module.exports = app;