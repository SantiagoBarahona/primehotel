# TODO
- IMPLEMENT FROM ROUTE
- LOGOUT
- IMPLEMENTAR LO LO SIGUIENTE EN LA BBDD MYSQL

    Las sentencias ALTER TABLE que proporcionaste son correctas para agregar llaves foráneas a la tabla AdministratorxHotel, vinculándola con las tablas Administrator y Hotel. Sin embargo, aquí tienes una versión mejorada de las consultas para agregar las llaves foráneas, asegurando que todo esté en orden y que los nombres de las columnas coincidan correctamente.

        --- Agrega la llave foránea que referencia a la tabla Administrator
        ALTER TABLE `AdministratorxHotel` 
        ADD CONSTRAINT `fk_administrator`
        FOREIGN KEY (`id_administrator`) 
        REFERENCES `Administrator` (`id`)
        ON DELETE CASCADE
        ON UPDATE CASCADE;

        -- Agrega la llave foránea que referencia a la tabla Hotel
        ALTER TABLE `AdministratorxHotel` 
        ADD CONSTRAINT `fk_hotel`
        FOREIGN KEY (`id_hotel`) 
        REFERENCES `Hotel` (`id`)
        ON DELETE CASCADE
        ON UPDATE CASCADE;
- Implementar el caso en el que el email y la contraseña no existen en el ADMINSIGNUP
