# L2_Nodejs
Aplicacion distribuida basica NodeJS , utilizando MongoDB y haproxy

Incluye vagrantfile para construir un entorno mínimo MEAN.

#Requisitos.
- Oracle Virtual Box https://www.virtualbox.org/wiki/Downloads
- Vagrant https://www.vagrantup.com/downloads.html

# Ejecutar APP.

Luego de instalar las aplicaciones requeridas:
-	Clonar Repositorio.
-	Ingresar a la carpeta del repositorio clonado.
-	Abrir un terminar y escribir "vagrant up"
-	Esperar a que termine la instalacion de los componentes.
-	Luego ingresar mediante ssh al servidor vagrant:
		IP: localhost
		puerto: 2222
		usuario: vagrant
		pass: vagrant
-	ejecutar cd /vagrant/app
-	npm install 
-	npm start (Para debug ejecutar: set DEBUG=myapp & npm start)


Realizar Importacion de bd para cada uno de los json incluidos en la carpeta app/data/finanzas_*.json
.\mongoimport.exe /d Rrhh /c usuarios /file /ruta/al/archivo/rrhh_usuarios.json

Exportar BD Mongo
.\mongoexport.exe /d Rrhh /c usuarios /o /ruta/destino/archivo/rrhh_usuarios.json /pretty

EMAIL UNICO
db.usuarios.ensureIndex({email:1},{unique:true, sparse:true});

