const Processo = (sequelize, DataTypes) => {
  const Processo = sequelize.define('processos', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    CNJ: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    tribunalOrigem: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    dataInicial: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    autor: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    reu: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    timestamps: false,
    tableName: 'processos',
  });

  Processo.associate = (models) => {
    Processo.hasMany(models.movimentacoes, {
      foreignKey: 'id',
    });
  };

  return Processo;
};

module.exports = Processo;