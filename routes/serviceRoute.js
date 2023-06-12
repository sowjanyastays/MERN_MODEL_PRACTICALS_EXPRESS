// const express = require('express')
// const router = express.Router()
// const {getList, middlewareFunction, getServiceById} = require('../controllers/serviceController')

// router.route('/').get(getList)
// router.route('/:id').get(middlewareFunction,getServiceById)


// module.exports = router
const express = require('express')
const data = require('./serviceList.js')
const router = express.Router();


router.get('/',(request,response)=>{
    response.status(200).send(data);

})

router.get('/:id',(request,response)=>{
    response.status(200).send(req.service);
 })

router.param('id',(request,response,next,id)=>{
    if(id>7){
       return response.status(500).send("Enter a valid number within 7")
    }
    else{
    request.service = data[id].name;
    }
    next();
})

module.exports = router;