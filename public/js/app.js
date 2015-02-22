'use strict';

angular.module('mean', ['ngCookies', 'ngResource', 'ui.bootstrap','ui.router', 'mean.system', 'mean.articles','mean.BP','ui.map','ngSanitize','ngMessages','restangular','ngAnimate','toaster','angular-loading-bar','chart.js','ui.grid', 'ui.grid.pagination', 'ui.grid.selection','ui.grid.autoResize', 'ui.grid.exporter','ui.grid.pinning']);

angular.module('mean.system', []);
angular.module('mean.articles', []);
angular.module('mean.BP', []);