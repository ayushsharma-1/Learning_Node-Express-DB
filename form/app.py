from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")  # Default route for form.html
def default_view():
    return render_template("form.html")

@app.route("/form")  # Explicit route for form.html
def form_view():
    return render_template("form.html")

@app.route("/<path:path>")  # Catch-all route for any other path
def catch_all(path):
    return render_template("index.html")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3300)
