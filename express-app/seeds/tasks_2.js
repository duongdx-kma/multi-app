/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()
  await knex('tasks').insert([
    {task_id: 2, description: 'description1', title: 'title1', user_id: "2"},
    {task_id: 3, description: 'description2', title: 'title2', user_id: "2"},
    {task_id: 4, description: 'description3', title: 'title3', user_id: "2"}
  ]);
};
