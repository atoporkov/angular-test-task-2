import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import { routing } from './config/app.config';

import home from './views/home';

import services from './services';
import components from './components';

import 'normalize.css';
import './assets/styles/app.scss';

angular
    .module('app', [uirouter, home, services, components])
    .config(routing);
