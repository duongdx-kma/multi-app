/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {user_id: 2, user_name: 'duongdx1', password: "password"},
    {user_id: 3, user_name: 'duongdx2', password: "password"},
    {user_id: 4, user_name: 'duongdx3', password: "password"}
  ]);
};
