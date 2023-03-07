r:
	ng serve --poll 1 --open --port 4300


jquery: 
	npm install jquery --save
	npm install @types/jquery --save-dev


#Crear un Routing y Module dentro de una carpeta con el mismo nombre del componente. 
#El --flat hace que no cree otra carpeta con el mismo nombre
#El --routing genera el routing. 
# EJEMPLO: TODO/web-dental/src/app/angular-practica$ ng generate module angular-practica --routing --flat
routing:
	ng generate module angular-practica --routing --flat
	