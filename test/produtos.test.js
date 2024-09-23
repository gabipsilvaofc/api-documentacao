const request = require('supertest')
const app = require('../index')

describe('GET /produtos', ()=>{
    it('pegar a lista de produtos com sucesso', async () => {
        const res = await request(app).get('/produtos').send();
        expect(res.status).toBe(200);
    })
    it('verifica se a lista de produtos está cheia', async () => {
        const res = await request(app).get('/produtos').send();
        expect(res.body).toBeDefined();
    })
    it('id da lista de produtos', async () => {
        const res = await request(app).get('/produtos/36f188a0-e10a-4764-bf71-43c584fad528').send();
        expect(res.body).toBeDefined();
    })
})

describe('POST /produtos/:id', () => {
    it('criar produto com sucesso', async () =>{
        const rest = await request(app).post('/produtos').send(
            {
                nome: "Câmera 4k Ultra HD",
                descricao: "camera top",
                preco: 399.90
            }
        );
        expect(rest.status).toBe(204)
    })
})

describe('UPDATE /produtos/:id', ()=>{
    it('Atualizar nome do produto com sucesso', async () => {
        const res = await request(app).post('/produtos/2').send(
            {
                nome: 'Camisa azul com desenho de hashtag'
            }
        );
        expect(res.status).toBe(200);
    })
})

describe('DELETE /produtos/:id', ()=>{
    it('Deletar produto com sucesso', async () => {
        const res = await request(app).delete('/produtos/1').send();
        expect(res.status).toBe(204);
    })
})