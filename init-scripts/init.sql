DELIMITER //
CREATE PROCEDURE create_table_if_not_exists()
BEGIN
  IF NOT EXISTS (SELECT * FROM information_schema.tables WHERE table_schema = 'nodedb' AND table_name = 'people') THEN   
    CREATE TABLE people (
      id INT NOT NULL AUTO_INCREMENT,
      name VARCHAR(255),
      PRIMARY KEY (id)
    );
  END IF;
END //
DELIMITER ;

CALL create_table_if_not_exists();
