import { conectioDb, sql, queries } from "../database";

export const getCites = async (req, res) => {
    try {
        const pool = await conectioDb();
        const cites = await pool.request().query(queries.getAllCities);
        res.json(cites.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const createCites = async (req, res) =>{
     const { name, cel, address, city } = req.body;

    if(name == null || cel == null || address == null || city == null){
       return res.status(400).json({msg : "Es necesario llenar los campos"});
    }

    try {
        const pool = await conectioDb();
        const transaction = new sql.Transaction(pool);
        await transaction.begin();
        try {
            const citesRequest = new sql.Request(transaction);

            await citesRequest.input('name', sql.VarChar, name)
            .input('status', sql.Bit, 0)
            .input('user_id', sql.Int, 1)
            .query(queries.addNewCite);
            const id = await citesRequest.query("SELECT @@IDENTITY AS 'Identity'");
            const citeID = id.recordset[0].Identity
            const infoRequest = new sql.Request(transaction);
          await infoRequest.input('cites_id', sql.Int, citeID)
          .input('city', sql.VarChar, city)
          .input('cel', sql.VarChar, cel)
          .input('address', sql.VarChar, address)
          .input('status', sql.Bit, 0)
          .query(queries.addNewInfo);
          await transaction.commit();
          res.json('Datos registrados')
        } catch (error) {
          await transaction.rollback();
          throw error;
        }
      } catch (error) {
        console.error('Error al insertar datos:', error);
      } finally {
        sql.close();
      }
}
export const createCites2 = async (req, res) =>{
     const { name, cel, address } = req.body;

     if(name == null || cel == null || address == null){
        return res.status(400).json({msg : "Es necesario llenar los campos"});
     }

     try {
        const pool = await conectioDb();
        await pool.request()
        .input('name', sql.VarChar, name)
        .input('status', sql.Bit, 0)
        .input('user_id', sql.Int, 1)
        .query(queries.addNewCite)
        res.json('New product')
     } catch (error) {
        res.status(500);
        res.send(error.message);
     }
}
export const getCitesById = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await conectioDb();
        const cites = await pool.request()
        .input('id', id)
        .query(queries.getCitesById);
        res.json(cites.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const delCitesById = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await conectioDb();
        const cites = await pool.request()
        .input('id', id)
        .query(queries.deleteCitesById);
        res.send('Eliminado');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const updateCitesById = async (req, res) => {
    const { name, status, cel, address, city } = req.body;
    const { id } = req.params

    if(name == null || cel == null || address == null){
        return res.status(400).json({msg : "Es necesario llenar los campos"});
    }

    try {
        const pool = await conectioDb();
        await pool.request()
        .input('name', sql.VarChar, name)
        .input('status', sql.Bit, status)
        .input('user_id', sql.Int, 1)
        .input('id', sql.Int, id)
        .query(queries.updateCitesById)
        await pool.request()
        .input('cel', sql.VarChar, cel)
        .input('address', sql.VarChar, address)
        .input('city', sql.VarChar, city)
        .input('id', sql.Int, id)
        .query(queries.updateCiteInfoById)
        res.json('actualizado')
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};