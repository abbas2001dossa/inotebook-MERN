const express = require('express');
const router = express.Router();

// this is for the only dash  after /api/auth/    ---- thus like this we can define more rouytes which could directly access 
router.get('/' , (req,res)=>{
    
    // making a js object we can send in response ! 
    obj = {
        name : "Abbas Dossa this is notes.js now ! ",
        age : 21
    }

    // sending response in json format ! 
    res.json(obj);
});



// necessary to make it work ! and for a complete connection so the response go back as welll! 

module.exports = router