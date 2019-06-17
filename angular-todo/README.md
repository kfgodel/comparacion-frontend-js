# TODO list en Angular

Esta app usa angular para modelar un simple TODO list.  
Siguiendo [un tutorial](https://www.sitepoint.com/ultimate-angular-cli-reference/)
y modificandolo para que sea un todo list como el de react

### Prerequisitos
- [NVM](https://github.com/nvm-sh/nvm)
> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash  

- Creador de apps con ember
> npm install -g @angular/cli

### Primer Setup 

- Crear aplicacion 
> ng new angular-todo   
> mv angular-todo/* .    
> mv angular-todo/.* .  
> rm -r angular-todo

- Instalar material-ui  
> npm install --save @angular/material @angular/cdk @angular/animations  
  
  
### Setup de ambiente al bajar

- Bajar las dependencias necesarias
> npm install

- Levantar la app
> ng serve --open

Deberia estar disponible en [http://localhost:4200/](http://localhost:4200/)
