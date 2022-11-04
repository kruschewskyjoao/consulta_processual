const Movimentacao = (sequelize, DataTypes) => {
  const Movimentacao = sequelize.define('movimentacoes', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    CNJ: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    dataMov: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    descricao: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    timestamps: false,
  });

    Movimentacao.associate = (models) => {
    Movimentacao.belongsTo(models.processos, {
      foreignKey: 'id', as: 'processos'
    });
  }

  return Movimentacao;
};

module.exports = Movimentacao;
