import simplejson, flask

app = flask.Flask('UtahJS Demo')

@app.route("/")
def _root():
    return flask.render_template("root.html")

@app.route("/partials/<filename>")
def _partial(filename):
    return open("partials/{0}".format(filename)).read()

@app.route("/api/people")
def _api():
    return simplejson.dumps([{
        "name": "Bob Jones",
        "age": 42,
        "weight": 205,
    },{
        "name": "Joe Mason",
        "age": 16,
        "weight": 120,
    },{
        "name": "Dave Johnson",
        "age": 33,
        "weight": 185,
    }])

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
