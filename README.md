UtahJS Presentation
===================

February 28, 2013
----------------

To run the sample code, you'll need Python and Flask:

	sudo apt-get install python
	sudo pip install flask

(Don't use sudo if you don't have to--virtualenv is preferred)

Now run the server:

	python demo.py

And go to `http://127.0.0.1:5000` in your browser.

To run the testacular unit tests:

    cd utahjs-2013-02-28
    npm install testacular@0.6.0
    node_modules/testacular/bin/testacular start config/testacular.conf.js

Now connect a browser to 127.0.0.1:9876. The tests will automatically run every time you save any of the *.js files in this project.
