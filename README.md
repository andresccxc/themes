There are two way to manage templates, each one have itself branch `Idea-Nicolas` and `Template-andres`

## Installation
* npm install

## Usage
* npm start

## Branch:  Idea-Nicolas

There is a folder called `JsonExamples` which have a file with two object which simulate a json response from a api.

this json's have the next properties:
`selected_theme` which is to select theme,
`styles` which have a style object
`pages` which have information to show on each page,

# Flow
When user open web app, app select a theme random and it save on redux store, next for each one page extract to styles and configure Global component to it create a css virtual dom 
through `emotion`[https://emotion.sh/docs/introduction] library

Depending on the selected theme, it charge the components from theme which found in folder `/themes`, the components have default tailwind class but to personalize, tags have an empty class whose name and configuration are saved in json
