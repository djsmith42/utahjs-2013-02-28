describe('myPersonWidget Directive', function () {
    'use strict';
    var elem, scope;

    beforeEach(module("MyDirectives"));
    beforeEach(inject(function($injector, $rootScope, $compile, $location, $httpBackend) {
        scope = $rootScope.$new();
    }));

    it("renders the html from its partial", inject(function($compile, $httpBackend) {
        $httpBackend.expectGET("/partials/my-person-widget.html").respond("<div>Test Partial</div>");
        var link = $compile("<my-person-widget></my-person-widget>");
        elem = link(scope);
        $httpBackend.flush();
        expect(elem.html()).toEqual("Test Partial");
    }));

    it("passes click events to the specified callback", inject(function($compile, $httpBackend) {
        $httpBackend.expectGET("/partials/my-person-widget.html").respond('<div>Test Partial <button ng-click="clicked()"</div>');
        var testClickCalled = false;
        scope.testClick = function() {
            testClickCalled = true;
        }
        var link = $compile('<my-person-widget clicked="testClick"></my-person-widget>');
        elem = link(scope);
        $httpBackend.flush();
        $(elem.find("button")).click();
        expect(testClickCalled).toBe(true);
    }));
});
