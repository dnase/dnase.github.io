"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var LogosComponent = (function () {
    function LogosComponent() {
        this.title = 'Some technologies with which I work';
        this.logos = LOGOS;
    }
    LogosComponent = __decorate([
        core_1.Component({
            selector: 'logos',
            templateUrl: 'templates/logos.html'
        }), 
        __metadata('design:paramtypes', [])
    ], LogosComponent);
    return LogosComponent;
}());
exports.LogosComponent = LogosComponent;
var LOGOS = [
    { name: 'Python', image: 'python.png', url: 'http://www.python.org', cols: 2 },
    { name: 'AngularJS', image: 'angular.png', url: 'https://www.angular.io', cols: 2 },
    { name: 'Apache HTTP Server', image: 'apache.png', url: 'http://www.apache.org/', cols: 2 },
    { name: 'Nginx', image: 'nginx.png', url: 'https://www.nginx.com/', cols: 2 },
    { name: 'MongoDB', image: 'mongodb.png', url: 'https://www.mongodb.com/', cols: 2 },
    { name: 'Gulp & Sass', image: 'gulp_sass.png', url: 'http://sass-lang.com/', cols: 2 },
    { name: 'PHP', image: 'php.png', url: 'http://php.net/', cols: 1 },
    { name: 'MySQL', image: 'mysql.png', url: 'https://www.mysql.com/', cols: 1 },
    { name: 'Bootstrap', image: 'bootstrap.png', url: 'http://getbootstrap.com/', cols: 2 },
    { name: 'PostgreSQL', image: 'postgresql.png', url: 'https://www.postgresql.org/', cols: 1 },
    { name: 'HTML5', image: 'html5.png', url: 'https://html5.org/', cols: 1 },
    { name: 'Grunt', image: 'grunt.png', url: 'http://gruntjs.com/', cols: 2 },
    { name: 'MaterializeCSS', image: 'materialize.png', url: 'http://materializecss.com/', cols: 2 },
    { name: 'jQuery', image: 'jquery.png', url: 'https://jquery.com/', cols: 2 },
    { name: 'TypeScript', image: 'typescript.png', url: 'https://www.typescriptlang.org/', cols: 2 },
    { name: 'Docker', image: 'docker.png', url: 'https://www.docker.com/', cols: 2 },
    { name: 'Git', image: 'git.png', url: 'https://git-scm.com/', cols: 1 },
    { name: 'Rails', image: 'rails.png', url: 'http://rubyonrails.org/', cols: 1 },
    { name: 'Ruby', image: 'ruby.png', url: 'https://www.ruby-lang.org/', cols: 1 },
];
//# sourceMappingURL=logos.component.js.map