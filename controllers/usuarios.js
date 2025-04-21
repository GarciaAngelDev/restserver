const { response, request } = require('express')

const usuariosGet = (req = request, res = response) => {

  const {q, nombre = 'Not name', apikey, page = 1, limit } = req.query

  res.json({
    msg: 'get API - Controlador',
    q,
    nombre,
    apikey,
    page,
    limit
  })
}

const usuariosPost = (req, res = response) => {

  const { nombre, edad } = req.body

  res.json({
    msg: 'POST API - Controlador',
    nombre,
    edad
  })
}

const usuariosPut = (req, res) => {

  const { id } = req.params;

  res.json({
    msg: 'PUT API - Controlador',
    id
  })
}



module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut
}