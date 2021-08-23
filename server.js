const express = require('express')
const app = express()
const methodOverride = require('method-Override');
const pokedex = require('./models/pokemon')
port = 3000
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

app.get('/pokedex',(req,res) => {
res.render('index.ejs',
{
  pokedex:pokedex
})
})
app.get('/pokedex/:id/edit', (req,res) => {
  res.render('edit.ejs',
  {
    pokemon:pokedex[req.params.id],
    number:[req.params.id]
  })
})

app.get('/pokedex/delete',(req,res) => {
  res.render('delete.ejs',
  {
    pokedex:pokedex
  })
})
app.post('/pokedex',(req,res) => {
  console.log(req.body)
  pokedex.push(req.body)
  res.redirect('/pokedex')

})
app.delete('/pokedex/:id',(req,res) => {
  pokedex.splice(req.params.id, 1)
  res.redirect('/pokedex')
})
app.get('/pokedex/new',(req,res) => {
res.render('new.ejs')
})

app.get('/pokedex/:id', (req,res) => {
  res.render('show.ejs',
  {
  pokemon:pokedex[req.params.id],
  number:[req.params.id]
  })
})


app.put('pokedex/:id',(req,res) => {
  pokedex[req.params.id] = req.body
  res.redirect('/pokedex')
})

app.listen(port,() => {
  console.log(`i love you ${port}...`)
})
