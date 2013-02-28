import simplejson, flask

app = flask.Flask('UtahJS Demo')

@app.route("/")
def _root():
    return flask.render_template("root.html")

@app.route("/partials/<filename>")
def _partial(filename):
    return open("partials/{0}".format(filename)).read()

@app.route("/api/<thing>")
def _api(thing):
    return simplejson.dumps([{
        "name": "Bob",
        "age": 42,
    },{
        "name": "Joe",
        "age": 16,
    },{
        "name": "Dave",
        "age": 33,
    }])

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
