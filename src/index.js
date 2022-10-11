// const express = require('express')

//Nosotros podemos utilizar import y export asique es mas recomendable usar esa sintaxis. Asique usaremos:

import express from "express";
//Lo importamos en packae json primero.

const app = express() 

app.get("/", (req, res) => {
    res.send('<h1>Bienvenido!<h1>')
})
//Send simplica mucho mas el envio de respuestas al cliente por que el send ya tiene informacion por ejemplo de los datos que les podriamos enviar como html. Este send simplifica mucho mas el envio de respuestas al cliente por que el send tiene informacion de los datos que podriamos enviarle como podrian ser html o podrian ser textos o el valor que querramos.
//Lo interesante es que ya no nesecitamos usar rutas en express es decir, si quisieramos otra ruta seria:

app.get("/about", (req, res) => {
    res.send('<h1>Bienvenido! Estas en about<h1>')
})

app.listen(3000)

console.log('server en el puerto', 3000)
//.-----------------------------------------------------------
//[Deploy]

//Su principial proposito es crear servidores web. Hay muchos servicios en la nube que permiten despegar node simplemente subiendo tu codifo y ya el sservicio hace el resto.