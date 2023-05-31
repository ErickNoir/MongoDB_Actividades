//Link de conexión: mongodb+srv://Andrru:FR4NK13@cluster0.wqotxgz.mongodb.net/?retryWrites=true&w=majority
//Conexion a la base de datos en MongoDBAtlas
use('Linces')

//Se usa el método db.collection.updateOne() para actualizar el primer documento que coincida con un filtro especificado.
db.Citas.updateOne({Nombre:'Paco'},
    {
        $set: {
            Edad: 5
        }
    }
)

//Se usa db.collection.updateMany() para actualizar todos los documentos que coincidan con un filtro especificado.

db.Paciente_Mascotas.updateMany(
    { edad: { $lt: 1 } },
    {
      $set: { edad: 2}
    }
  )

//Se utiliza db.collection.updateMany() para actualizar todos los documentos que coincidan con un filtro especificado.

db.Usuarios.updateMany(
    { fecha_de_union : { $lt: 2021-12-31 } },
    {
      $set: { fecha_de_union: 2022-01-01}
    }
  )