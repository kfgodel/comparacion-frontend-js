# TODO list en Ember

Esta app usa ember sin adicionales para modelar un simple TODO list.  
Siguiendo tutorial [oficial de ember](https://guides.emberjs.com/release/tutorial/ember-cli/)
y modificandolo para que sea un todo list como el de react

### Prerequisitos
- [NVM](https://github.com/nvm-sh/nvm)
> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash  

- Creador de apps con ember
> npm install -g ember-cli

### Primer Setup 

- Crear aplicacion 
> ember new ember-todo   
> rm -fR ember-todo/.git  
> mv ember-todo/* .    
> mv ember-todo/.* .  
> rm -r ember-todo

- Instalar material-ui  
> ember install ember-paper  
  
  
### Setup de ambiente al bajar

- Bajar las dependencias necesarias
> npm install

- Levantar la app
> ember serve

Deberia estar disponible en [http://localhost:4200/](http://localhost:4200/)
