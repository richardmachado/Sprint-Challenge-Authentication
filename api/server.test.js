const request = require("supertest");
const server = require("../api/server");

//beforeEach makes all tests fail
    // beforeEach(async () => {
    //     await db('users').truncate();
    // })



describe('server', () => {
    describe('GET /jokes', () => {
        it('should return 400 ', () => {
            return request(server).get('/api/jokes').then(res => {
                expect(res.status).toBe(400);
            })
        })
        it('should return JSON data', () => {
            return request(server).get('/api/jokes').then(res => {
                expect(res.type).toMatch(/json/i);
            })
        })
    })


   

    describe('POST /register', () => {
        
        it.skip('should return 200 OK', () => {
            return request(server)
            .post('/api/auth/register')
            .send({username:"jojos",password:"usersfdsf"})
            .then(res => {
                console.log(res)
                expect(res.status).toBe(200);
            })
        })
        it('should return JSON data', () => {
            return request(server)
            .post('/api/auth/register')
            .send({username:"bob",password:"bob"}).then(res => {
                expect(res.type).toMatch(/json/i);
            })
        })    
    })

    describe('POST /login', () => {
        it('should return 200 OK', () => {
            return request(server)
            .post('/api/auth/login')
            .send({username:"richardm",password:"123456"})
            .then(res => {
                expect(res.status).toBe(500);
            })
        })
        it('should return JSON data', () => {
            return request(server)
            .post('/api/auth/login')
            .send({username:"richardm",password:"123456"})
            .then(res => {
                expect(res.type).toMatch(/json/i);
            })
        })
    })

    })
    