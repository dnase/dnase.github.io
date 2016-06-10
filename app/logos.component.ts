import { Component, AfterViewInit } from '@angular/core';

import { Logo } from './logo';

@Component({
  selector: 'logos',
  templateUrl: 'templates/logos.html'
})

export class LogosComponent {
  title = 'Some technologies with which I work';
  logos = LOGOS;
}

var LOGOS: Logo[] = [
  { name: 'Python', image: 'python.png', url: 'http://www.python.org', cols: 2 },
  { name: 'AngularJS', image: 'angular.png', url: 'https://www.angular.io', cols: 2},
  { name: 'Apache HTTP Server', image: 'apache.png', url: 'http://www.apache.org/', cols: 2},
  { name: 'Nginx', image: 'nginx.png', url: 'https://www.nginx.com/', cols: 2},
  { name: 'MongoDB', image: 'mongodb.png', url: 'https://www.mongodb.com/', cols: 2},
  { name: 'Gulp & Sass', image: 'gulp_sass.png', url: 'http://sass-lang.com/', cols: 2},
  { name: 'PHP', image: 'php.png', url: 'http://php.net/', cols: 1},
  { name: 'MySQL', image: 'mysql.png', url: 'https://www.mysql.com/', cols: 1},
  { name: 'Bootstrap', image: 'bootstrap.png', url: 'http://getbootstrap.com/', cols: 2},
  { name: 'PostgreSQL', image: 'postgresql.png', url: 'https://www.postgresql.org/', cols: 1},
  { name: 'HTML5', image: 'html5.png', url: 'https://html5.org/', cols: 1},
  { name: 'Grunt', image: 'grunt.png', url: 'http://gruntjs.com/', cols: 2},
  { name: 'MaterializeCSS', image: 'materialize.png', url: 'http://materializecss.com/', cols: 2},
  { name: 'jQuery', image: 'jquery.png', url: 'https://jquery.com/', cols: 2},
  { name: 'TypeScript', image: 'typescript.png', url: 'https://www.typescriptlang.org/', cols: 2},
  { name: 'Docker', image: 'docker.png', url: 'https://www.docker.com/', cols: 2},
  { name: 'Git', image: 'git.png', url: 'https://git-scm.com/', cols: 1},
  { name: 'Rails', image: 'rails.png', url: 'http://rubyonrails.org/', cols: 1},
  { name: 'Ruby', image: 'ruby.png', url: 'https://www.ruby-lang.org/', cols: 1},
];
