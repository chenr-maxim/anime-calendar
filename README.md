# Anime-Calendar

<h3>Definitions</h3>
<ul>
<li>stack: a group of languages/frameworks that comprise your macroscopic application/website</li>
<li>Fronend: what the user interacts with</li>
<li>Backend: where the application logic (business logic) takes place in</li>
<li>application/business logic: the code that calculates a desired result</li>
<li>language: a programming language (ex: Java, Javascript, Python)</li>
<li>framework: a file/group of files of pre-written code that can be added to your software (ex: Java standard library, Express for Node)</li>
<li>Node (or sometimes NodeJS): an implementation of javascript that runs on a process on a computer instead of the DOM as javascript typically is in a browser</li>
<li>DOM Document Object Model, the way javascript runs in a browser. In this implementation there is a global object called document that hosts all logic. (note: there are other global objects like window)</li>
<li>node: a computer that is running a server as a daemon (constantly on) that will accept requests and send some sort of response as a function (in the mathematical sense) of the request</li>
<li>service-centric infastructure: A group of nodes that accessable by network requests that respond with the result of some sort of calculation</li>
<li>protocol: a set of rules that allows access to information in a consistent basis even with a lot of people/machines trying to access the information (ex: At a stoplight, green means go, yellow means slow down, and red means stop)</li>
</ul>

<h3>How to communicate between the Client and Server</h3>

In applications/websites this is typically done in 2 ways:

Sockets
HTTP (Technically HTTP is implemented using sockets with TCP but you don't need to know that now)
We will be using HTTP which is comprised of a couple different requests that have different properties:

<b>GET
POST
PUT
DELETE</b>
There are really two different types of requests Get and (Post, Put, Delete). Get requests have parameters passed via the URL (the thing thats in the top bar in a browser, ex: https://www.google.com/search?site=&source everything after the ? so one parameter site which is assigned to &source) and Post, Put, and Delete requests have parameters passed by something called a request body. You might be thinking to yourself, "how are these things sent from one computer to another." This is done via a protocol called IP (Internet Protocol) coupled with some underlying protocols that you don't need to know about right now. Look at the protocol definition above before you continue.

<h3>Introduction to Backend</h3>

First and foremost Backend programming is about business logic. Modern backend programming typically involves setting up a "service-centric" infastructure to get jobs done. This means setting up one or more nodes that perform the logic of your application. This includes but is not limited to: database storage, complex calculations, logging.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
