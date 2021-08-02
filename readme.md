# installation
```bash
npm install
npm run dev or npm start
```

## using
expressjs, mongoDb

### api
base_url
prefix: '/api'

// localhost:9001/api/users
// users
### endpoint user
endpoint: /users GET
    - params: sort, order, page

// 6106eb4a59b75431171f0e9d
endpoint: /user POST
- params: name (required), hobi, alamat, nomor_telpon

endpoint: /user/:id GET
- params: id

endpoint: /user/:id PUT
- params: name (required), hobi, alamat, nomor_telpon

endpoint: /user/:id DELETE
- params: id

### endpoint product
endpoint: /products GET
endpoint: /product/stock GET
endpoint: /product/sum-stock GET



