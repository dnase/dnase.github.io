import { Component, AfterViewInit } from '@angular/core';

import { Project } from './project';

@Component({
  selector: 'projects',
  templateUrl: 'templates/projects.html'
})

export class ProjectsComponent {
  title = 'A Few of My Projects';
  projects = PROJECTS;
}

var PROJECTS: Project[] = [
  {name: 'TicTacToe', description: 'Tic tac toe with a variant of Minimax using A/B pruning', url: 'https://github.com/dnase/tictactoe'},
  {name: 'AGPython', description: 'Affine gap alignment of gene sequences in Python', url: 'https://github.com/dnase/affine-gap-sequence-alignment'},
  {name: 'LP5Responsive', description: 'A responsive theme using Bootstrap for Luminis Portal', url: 'https://github.com/dnase/lp5-theme-bootstrap'},
  {name: 'PyCrack', description: 'A Python script for cracking SHA1-encrypted (LDAP) password hashes', url: 'https://github.com/dnase/pythoncrack'},
  {name: 'drewnase.com', description: 'This website, written in AngularJS with MaterializeCSS', url: 'https://github.com/dnase/dnase.github.io'}
]
