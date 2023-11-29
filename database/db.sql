CREATE TABLE IF NOT EXISTS products(
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(60) NOT NULL,
  precio REAL NOT NULL,
  descripcion VARCHAR(200), 
  image VARCHAR(200),
  created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products(nombre, precio, descripcion, image) VALUES ('item1', '123,12', 'primer producto', 'http://imgurl.com.es');
