// indentificando o banco de dados para o sequelize

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'Ygcb.1999',
  database: 'tasklist',
  define: {
    timestamps: true,
    underscored: true,
    undescoredAll: true,
  }
}
