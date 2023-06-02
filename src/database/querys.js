export const queries = {
    getAllCities: 'SELECT c.ID, c.name, i.cel, i.city, i.address  FROM cites_infos i JOIN cites c ON i.cites_id = c.ID',
    addNewCite: 'INSERT INTO cites (name, status, user_id) VALUES (@name, @status, @user_id)',
    addNewInfo: 'INSERT INTO cites_infos (cel, city, address, status, cites_id) VALUES (@cel, @city, @address, @status, @cites_id)',
    getCitesById: 'SELECT * FROM cites WHERE id = @id',
    deleteCitesById: 'DELETE FROM [mpdb].[dbo].[cites] WHERE id = @id',
    updateCitesById: 'UPDATE cites SET name = @name, status = @status WHERE id = @id',
    updateCiteInfoById: 'UPDATE cites_infos SET cel = @cel, address = @address, city = @city WHERE cites_id = @id ;'
}