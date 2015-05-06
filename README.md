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
-	Finalmente, ejecutar cd /vagrant/app y nodejs server.js
