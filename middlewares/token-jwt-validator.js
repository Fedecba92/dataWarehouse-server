const { response } = require('express');
const res = require('express/lib/response');
const jwt = require('jsonwebtoken');

const jwtValidator = ( req, res = response, next ) => {

    const token = req.header('x-token');




}