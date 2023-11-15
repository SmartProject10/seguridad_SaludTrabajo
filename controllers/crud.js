const conexion= require ("../database/db");

exports.save = (req, res) => {
    const id_comite = req.body.id_comite;
    const dni = req.body.dni;
    const nombres = req.body.nombres;
    const representacion = req.body.representacion;
    const cargos = req.body.cargos;
  
    conexion.query('INSERT INTO comite SET ?',{ id_comite:id_comite, dni:dni, nombres:nombres, representacion:representacion, cargos:cargos}, (error, results)=>{
      if(error){
        console.log(error);
      }else{
        res.redirect('/',);
      }
    })
  }
  
  exports.update = (req, res)=>{
    const id_comite = req.body.id_comite;
    const dni = req.body.dni;
    const nombres = req.body.nombres;
    const representacion = req.body.representacion;
    const cargos = req.body.cargos;
  
    conexion.query('UPDATE comite  SET ? WHERE id_comite = ?',[{ dni:dni, nombres:nombres, representacion:representacion, cargos:cargos }, id_comite], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
    });
  };