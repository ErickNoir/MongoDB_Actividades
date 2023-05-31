//Link de conexión: mongodb+srv://Andrru:FR4NK13@cluster0.wqotxgz.mongodb.net/?retryWrites=true&w=majority
//Conexion a la base de datos en MongoDBAtlas
use('Linces')

//Inserción de datos dentro de una colección de documentos
/*
db.Citas.insertOne({
    Fecha: '06/02/2022',
    Razon: 'Chequeo',
    Nombre: 'Bella',
    Veterinario: 'Audrey Philips',
    Dueño: 'Eric Acosta'
})
*/

//Consulta general de los datos dentro de una colección
db.Citas.find({})