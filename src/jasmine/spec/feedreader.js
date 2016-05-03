/* feedreader.js
 * to ensure they don't run until the DOM is ready.
 */
$(function(){
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /*  What happens when you change allFeeds in app.js to be 
         *  an empty array and refresh the
         *  page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* 1- it has a URL defined and that the URL is not empty.*/

        it('the URL defined and that the URL is not empty.', function() {
            allFeeds.forEach(function(entry) {
                expect(entry.url).toBeDefined();
                expect(entry.url.length).not.toBe(0);
            });
        });

        /* 2- it has a name defined and that the name is not empty.*/

        it('the name defined and that the name is not empty.', function() {
            allFeeds.forEach(function(entry) {
                expect(entry.name).toBeDefined();
                expect(entry.name.length).not.toBe(0);
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* 3- performing the hiding/showing of the menu element.*/

        var body = $('body');
        var hidden = $('menu-hidden');

        it('the menu element class is "hidden" by default.', function() {
            //expect(body.className).not.toContain("hidden");
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* 4- TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        var menuIcons = $('.menu-icon-link');

        it('when clicked hamburger menu changes class to "menu-hidden" and it changes when clicked again.', function() {
            menuIcons.click();
            expect($('body').hasClass('menu-hidden')).not.toBe(true);
            menuIcons.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* 5- TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it("the loadFeed function is called and completes its work", function(done) {
            var containers = $('.feed').length;
            expect(containers).toBeGreaterThan(0);
            done();
        });
        //console.log(containers);
    });
    /* TODO: Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {
        /* 6- new feed is loaded by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
        */
        var feed1;
        beforeEach(function(done) {
            loadFeed(0,function() {
                feed1 = $('.feed').html();
                loadFeed(1, function() {
                  done();
                });
            });
        });

        it("new feed is loaded by the loadFeed function", function(done) {
            console.log('This log will run after asyncFunction finishes successfully');
            var feed2 = $('.feed').html();
            expect(feed1).not.toBe(feed2);
            done();
        });

        console.log('This log will NOT wait for asyncFunction to finish. It will just run after asyncFunction is called');
    });
        
}());