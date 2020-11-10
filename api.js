'use strict'

const Api = require('claudia-api-builder');
const getPizzas = require('./handlers/get-pizzas');
const api = new Api();

api.get('/',() => `Wellcome to pizza API my diar!`)
api.get('/{name}',(req) => `Wellcome to pizza API my diar ${req.pathParams.name}!`)
api.get('/pizzas',() => getPizzas())
api.get('/pizzas/{id}', (req) => getPizzas(req.pathParams.id),{error: 404})

module.exports = api