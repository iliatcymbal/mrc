# mrec

This module helps to create default angular components from terminal.

## Requirements
Node ^7.0
npm ^3.5

## Installation

Install package globally to run it directly from terminal `npm i mrec -g`
Install it locally `npm i -D mrec` and use _npx_ (npm 5.2+) `npx mrec`

## Usage

Run `mrc` to create folder named "NewComponent" with default structure:

* NewComponent 
    * index.js
    * NewComponent.js
    * newСomponent.scss
    
## Options

You can change default component name by defining additional parameters.

### name
Define the name of created component (by default set to "Component").
The second option it is just set name without any arguments `mrec Main`
 
 ```
 mrec --name=Main
 ```
 or
 ```
 mrec Main
 ```

 Will generate the following:
 
* Main
    * index.js
    * Main.js
    * main.scss


### prf
 Allows to set text prefix to the name of your component (by default it is empty);
 
  ```
  mrec --prf=Main
  ```
  
  Will generate the following:
  
 * MainNewComponent
     * index.js
     * Main.NewComponent.js
     * Main.newComponent.scss
 
### postfix
 Allows to set text postfix to the name of your component (by default is empty);
 
  ```
  mrec --postfix=post
  ```
  
  Will generate the following:
  
 * NewComponentPost
     * index.js
     * NewComponent.post.js
     * newComponent.post.scss

### div
 Set delimiter to separate component name from postfix/prefix (by default is ".");
 
  ```
  mrec --prf=main --name=component --div=-
  ```
  
  Will generate the following:
  
 * MainComponent
     * index.js
     * main-component.js
     * main-component.scss
