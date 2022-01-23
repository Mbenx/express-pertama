const express = require('express')
const router = express.Router()

router.get('/', (req,res) =>{
  res.send('hello world')
});

router.get('/users/:id', (req,res) =>{
  const id = req.params.id
  if (Number(id) == 1){
    const user = {
      id: 1,
      name: "Heru",
      age: 25
    }
    res.send(user)
  }else{
    res.send('user not found')
  }

});

module.exports = router