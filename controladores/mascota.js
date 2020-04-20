var con = require('../conexionBd');


function buscarMascotas(req,res){

    var sql='select * from pets';
    con.query(sql,function(error,resultado,fields){
        if(error){
            console.log('hubo un erroe en la consulta de mascotas', error.message);
            return res.status(404).send('hubo un erorr en la consulta de mascotas');
        }
    console.log(resultado)
    res.send(JSON.stringify(resultado));
});
} 

function buscarNombrePet(req,res){

    var nombre=req.params.pet_name;

    var sql='select * from pets where name  = "'+nombre+'"';
    con.query(sql,function(error,resultado,fields){
        if(error){
            console.log('hubo un error en la consulta', error.message);
            return res.status(404).send('hubo un erorr en la consulta');
        }
        
        console.log("consulta " +sql);

    res.send(JSON.stringify(resultado));
    
 });
} 
  


module.exports={
    buscarMascotas:buscarMascotas,
    buscarNombrePet:buscarNombrePet
}