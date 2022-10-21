const { DataTypes } = require('sequelize')

module.exports = sequelize => {
        sequelize.define('Pin', {
                name: {
                        type: DataTypes.STRING
                },
                status: {
                        type: DataTypes.BOOLEAN,
                        defaultValue: false
                }
        }, {
                timestamps: true,
                cretedAt: false,
                updatedAt: 'actuaizado'
        });
}
