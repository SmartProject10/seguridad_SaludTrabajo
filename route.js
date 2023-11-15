const express = require('express');
const route = express.Router();
const conexion = require('./database/db');


route.get('/', function (req, res){
    conexion.query('SELECT * FROM comite', function(error, results){
        if(error){
           console.log(error);
        }else{
         res.render('index', {results:results});
        }  
                                })
                        })
                                
route.get('/create', (req,res)=>{
    res.render('create');
})

route.get('/edit/:idcomite', (req,res)=>{    
    const idcomite = req.params.idcomite;
    var query = `SELECT * FROM general WHERE id_comite="${idcomite}" `;
    conexion.query(query, (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('editcomite', {results:results[0]});            
        }        
    });
});

route.get('/delete/:idcomite', (req, res) => {
    const idcomite = req.params.idcomite;
    conexion.query('DELETE FROM comite WHERE idcomite = ?',[idcomite], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
    })
});

const crud = require('./controllers/crud');
route.post('/save',crud.save);
route.post('/update',crud.update);

module.exports= route;