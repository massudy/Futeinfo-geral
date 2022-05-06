'use strict'
import express from 'express'
import axios from 'axios'

const app = express()
const port = process.env.PORT || 3000;
app.use(express.json())


app.get('/',(req,res)=>{

res.send('Inicio API')

})

app.get('/audios/apresentacao',(req,res)=>{

    res.sendFile('apresentacao.html', { root: '.' })

    
    })


app.listen(port,() => {

    console.log(`Servidor Rodando na porta ${port}`)
    
    })