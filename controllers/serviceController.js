const serviceList = require('../routes/serviceList')

const getList = (request, response) =>{
    response.status(200).send(serviceList)
}

const getServiceById = (request, response) =>{
    const id = request.params.id
    response.status(200).send(`The service with id ${id} is ${request.serviceName}`)

}
const middlewareFunction = (request,response,next,id)=> {
    request.serviceName= serviceList[id];
    next();
}

module.exports = {getList, getServiceById, middlewareFunction}