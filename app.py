from flask import Flask,render_template,jsonify

app=Flask(__name__)

@app.route('/')
def hello():
    return render_template('index.html')

if __name__=='main':
    app.run(debug=True)