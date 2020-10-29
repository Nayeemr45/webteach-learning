const express 	= require('express');
const router 	= express.Router();


router.get('/', (request, response)=>{
	var user = {name: 'Nayeem', id: '12'};
	response.render('home/index', user);
});


module.exports = router;