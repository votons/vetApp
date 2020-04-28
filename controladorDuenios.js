const conexion=require ('./conexiobd');

function buscarOwners(req,res){
    var sql='select * from owners';
    conexion.query(sql,function(err,results,fields){
        if(err){
            return res.status(404).json('No se encuentra los datos');
        }        
        res.send(JSON.stringify(results));
    })
}

module.exports={buscarOwners};
