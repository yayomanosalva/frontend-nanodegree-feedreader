/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* 1- TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
        */
        
        it('the URL defined and that the URL is not empty.', function() {
            beforeEach(function() {                
                expect(allFeeds.url).toBeDefined();
                expect(allFeeds.url.length).not.toBe(0);
            });            
        });

        /* 2- TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('the name defined and that the name is not empty.', function() {
            beforeEach(function() {                
                expect(allFeeds.name).toBeDefined();
                expect(allFeeds.name.length).not.toBe(0);
            });            
        }); 
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* 3- TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        
        var Body = $('body');

        it('the menu element is hidden by default.', function() {
            expect(Body.className).toContain("menu-hidden");            
        });

         /* 4- TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
        */
        var menuIcons = $(".menu-icon-link").eq(0);

        it('does the menu display when clicked and does it hide when clicked again.', function() {
            menuIcons.click();
            expect(Body.className).toContain("menu-hidden"); 
            menuIcons.click();
            expect(Body.className).not.toContain("menu-hidden");        
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
            loadFeed(function() {
                var container = $('.feed');
                done();
            });
        });

        it("the loadFeed function is called and completes its work", function(done) {
            loadFeed(function(result) {
                espect(result).toContain(container);
                done();
            });
        });

    });


        

    /* TODO: Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {
        /* 6- TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
        */
        

    });

        
}());

/*
4- TODO: Escribe una prueba que asegura la visibilidad menú cambia cuando se hace clic en el icono de menú. Esta prueba debe tener dos expectativas: hace la visualización del menú cuando se hace clic y no se ocultan cuando se hace clic de nuevo.

5- TODO: Escribir un ensayo que aseguren cuando la función de la carga de alimentación se llama y completa su trabajo, existe al menos un sencillo.
elemento de entrada dentro del contenedor .feed.
Recuerde, alimentación de carga () es asíncrona lo que esta prueba requiere el uso de la función asíncrona hecho () Jazmín y beforeeach.

6- TODO: Escribir un ensayo que aseguren, cuando una nueva alimentación se carga por la función de alimentación de carga que el contenido cambia en realidad.
Recuerde, cargado () es asíncrono.
*/