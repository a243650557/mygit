const express = require('express');

const router = express.Router();

router.get('/', (request, response)=>{
    console.log('seller router 进行响应的');

    response.end();
})


module.exports = router;
