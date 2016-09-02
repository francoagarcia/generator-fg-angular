# Yeoman Generator for AngularJS projects
## Arquitecture
This generator is based on:

[Angular 1 Style Guide](//github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)

------------------------------------------------------------------------------------------------------------

## Prerequisites
### Install NodeJS y NPM
```	
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
```

### Execute npm as not root 
```
mkdir ~/.npm_repository
npm config set prefix ~/.npm_repository
echo "export NODE_REPO=$HOME/.npm_repository" >> ~/.bashrc
echo "export PATH=$PATH:$NODE_REPO/bin" >> ~/.bashrc
echo "export NODE_PATH=$NODE_PATH:$NODE_REPO/lib/node_modules" >> ~/.bashrc
sudo chown -R $USER:`id -g -n $USER` ~/.npm
```

### Check NodeJS and NPM versions
#### Node version >= v6.2.2.
```
node --version 
```
#### NPM vesion >= 3.9.5
```
npm --version
```
#### if they have an older version, you have to do:
```
npm cache clean -f
npm install -g n
n stable
npm install -g npm
```

### Install packages
```
npm install -g bower yo grunt grunt-cli gulp 
npm install -g ng-annotate ejs ember-cli phantomjs jshint less
```

------------------------------------------------------------------------------------------------------------

## Download && Install the Generator

1. Download the repo and linked with npm
```
cd ~
git clone https://github.com/francoagarcia/generator-fg-angular.git
cd generator-fg-angular
npm install
npm link
```
2. Set environment variable for PhantomJS test
```
echo "export PHANTOMJS_BIN=$NODE_REPO/lib/node_modules/phantomjs/bin/phantomjs" >> ~/.bashrc
```

------------------------------------------------------------------------------------------------------------

## Use the commands and follow the promts

### Create a project 
```
yo fg-angular
```

## Create Modules
```
yo fg-angular:module moduleName
```

## Create Partials
```
yo fg-angular:partial partialName
```

## Create Directives
```
yo fg-angular:directive directiveName
```

## Create Domain Objects
```
yo fg-angular:domain domainName
```

## Create Services
```
yo fg-angular:service serviceName
```

## Create  Filters
```
yo fg-angular:filter filterName
```

## Create Modals
```
yo fg-angular:modal modalName
```
