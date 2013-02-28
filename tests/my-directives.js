describe('myPersonWidget Directive', function () {
    'use strict';
    var elem, scope;

    beforeEach(module("MyDirectives"));
    beforeEach(inject(function($injector, $rootScope, $compile, $location) {
        scope = $rootScope.$new();
    }));

    it("renders the widget", inject(function($compile) {
        var link = $compile("<my-person-widget></my-person-widget>");
        elem = link(scope);
    }));
});
