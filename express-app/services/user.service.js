const db = require('./db.service');
const helper = require('../utils/helper.util');
const config = require('../configs/general.config');

async function getMultiple(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);

    console.log(page, config.listPerPage, 997777)
    const rows = await db.query(
        `SELECT user_id, user_name, password
         FROM users LIMIT ?, ?`,
        [offset, config.listPerPage]
    );
    const data = helper.emptyOrRows(rows);
    const meta = {page};

    return {
        data,
        meta
    }
}

async function create(user) {
    console.log('create', user)
    const result = await db.query(
        `INSERT INTO users
                 (user_name, password)
             VALUES (?, ?)`,
        [
            user.user_name, user.password
        ]
    );

    let message = 'Error in creating programming language';

    if (result.affectedRows) {
        message = 'Programming language created successfully';
    }

    return {message};
}

async function update(id, user) {
    console.log('update', id)
    console.log('update', user)

    const result = await db.query(
        `UPDATE users
             SET user_name=?,
                 password=?
             WHERE user_id = ?`,
        [
            user.user_name, user.password, id
        ]
    );

    let message = 'Error in updating programming language';

    if (result.affectedRows) {
        message = 'Programming language updated successfully';
    }

    return {message};
}

async function remove(id) {
    console.log('remove', id)
    const result = await db.query(
        `
    DELETE
    FROM
    users
    WHERE
    user_id = ? `,
        [id]
    );

    let message = 'Error in deleting programming language';

    if (result.affectedRows) {
        message = 'Programming language deleted successfully';
    }

    return {message};
}

module.exports = {
    getMultiple,
    create,
    update,
    remove
}