
-- Ver todos los usuarios en MySQL
SELECT user, Host FROM mysql.user;

SHOW VARIABLES LIKE 'validate_password%';
SET GLOBAL validate_password.policy = 0;

-- Crear nuevo usuario
CREATE USER alejandro@"%" IDENTIFIED BY "12345678";
CREATE USER patito@"%" IDENTIFIED BY "12345678";
CREATE USER GenSphere@"%" IDENTIFIED BY "DEVinciCode";

-- Crear permisos para ch26_la_comer
GRANT SELECT, INSERT on `ch26-ecommerce`.* TO patito@"%";

-- Dar todos los permisos
GRANT ALL PRIVILEGES on `ch26-ecommerce`.* TO patito@"%";
GRANT ALL PRIVILEGES on `gensphere`.* TO GenSphere@"%";

-- Conocer los privilégios de un usuario
SHOW GRANTS FOR patito@"%";

-- Quitar privilégios a un usuario
REVOKE INSERT ON `ch26-ecommerce`.* FROM patito@"%";

-- Eliminar un usuario
DROP USER alejandro@"%";

-- Cambiar la contraseña a un usuario
ALTER USER patito@"%" IDENTIFIED BY "tacosalpastor123";