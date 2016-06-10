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
var ProjectsComponent = (function () {
    function ProjectsComponent() {
        this.title = 'A Few of My Projects';
        this.projects = PROJECTS;
    }
    ProjectsComponent = __decorate([
        core_1.Component({
            selector: 'projects',
            templateUrl: 'templates/projects.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;
var PROJECTS = [
    { name: 'TicTacToe', description: 'Tic tac toe with a variant of Minimax using A/B pruning', url: 'https://github.com/dnase/tictactoe' },
    { name: 'AGPython', description: 'Affine gap alignment of gene sequences in Python', url: 'https://github.com/dnase/affine-gap-sequence-alignment' },
    { name: 'LP5Responsive', description: 'A responsive theme using Bootstrap for Luminis Portal', url: 'https://github.com/dnase/lp5-theme-bootstrap' },
    { name: 'PyCrack', description: 'A Python script for cracking SHA1-encrypted (LDAP) password hashes', url: 'https://github.com/dnase/pythoncrack' },
];
//# sourceMappingURL=projects.component.js.map