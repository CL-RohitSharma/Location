
module.exports = (Sequelize, sequelize) => {

    const frontofficeuser = sequelize.define('Frontofficeusers', {

        FirstName: {

            type: Sequelize.STRING,
            allowNull: false,
            validate: {

                notEmpty: true
            }
        },

        MiddleName: {

            type: Sequelize.STRING,
            allowNull: false,
            validate: {

                notEmpty: true
            }
        },

        LastName: {

            type: Sequelize.STRING,
            allowNull: false,
            validate: {

                notEmpty: true
            }
        },

        PhoneNo: {

            type: Sequelize.BIGINT(11),
            allowNull: false,
            validate: {

                notEmpty: true
            }
        },

        Email: {

            type: Sequelize.STRING,
            allowNull: false,
            validate: {

                notEmpty: true
            }
        },



        LoginID: {

            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {

                notEmpty: true
            }
        },

        Location: {

            
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false,
            validate: {

                notEmpty: true
            }
        },

        Role: {

            type: Sequelize.STRING,
            allowNull: false,
            validate: {

                notEmpty: true
            }

        },

        Tempass: {

            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {

                notEmpty: true
            }

        },

        Status: {

            type: Sequelize.STRING,
            allowNull: false,
            validate: {

                notEmpty: true
            }

        }


    });

    return frontofficeuser;


}