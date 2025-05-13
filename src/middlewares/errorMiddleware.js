// Middleware para captura de erros em toda a aplicação
function errorMiddleware(err, req, res, next) {
    // Exibe o erro completo no console para depuração
    console.error('[ERRO]:', err.stack);
    
    // Define o código de status da resposta: usa o informado no erro ou 500 (erro interno) como padrão
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        error: err.message || 'Erro interno no servidor',
        status: statusCode,
        // Retorna uma resposta JSON padronizada com a mensagem de erro e o status
    });
}

// Exporta o middleware para ser utilizado no app.js
module.exports = errorMiddleware;