require.config({
    baseUrl: 'js/lib',
    paths: {
    	app: '../app',
        jquery: [
        	'//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min',
        	'jquery-2.1.1.min'
        ],
        countdown: 'countdown',
        RAF: 'requestAnimationFrame'
    }
});

requirejs(["app/main"]);