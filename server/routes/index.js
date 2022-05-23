const express = require('express');
const router = express.Router();
const {recipeModel} = require('../db/models');

router.get('/recipe', async (req, res) => {
  try{
    const allRecipes = await recipeModel.findAll({raw:true});
    res.json({allRecipes}); // findeAll вернет вот такое: { allRecipes: [{}, {}, {}] } 
  }
  catch (err) {
        console.log(err);
        res.status(501).end()
      }
})

module.exports = router;




