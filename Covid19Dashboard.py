from flask import *
from flask import flash
import os
import base64
import json
from werkzeug.utils import secure_filename

app = Flask(__name__)

@app.route('/')
@app.route('/landing')
def landing():
     return render_template('covid19India.html')

@app.route('/analysisLanding')
def analysisLanding():
     session["username"] = ''
     return render_template('analysis.html')

@app.route('/stateAnalysisLanding')
def stateAnalysisLanding():
     session["username"] = ''
     return render_template('stateAnalysis.html')

@app.route("/getMultiLineSeries/", methods=['POST'])
def sendPassword():
    print("inside getMultiLineSeries")
    userdata = request.get_json()
    print(len(userdata))
    print(userdata['html_data'])
    return '0'

#Error Handling
@app.errorhandler(404)
# inbuilt function which takes error as parameter
def not_found(e):
    # defining function
    return render_template("404.html")

@app.errorhandler(500)
# inbuilt function which takes error as parameter
def not_found(e):
    # defining function
    return render_template("500.html")


if __name__ == '__main__':
    app.secret_key = 'namonamo'
    app.config['SESSION_TYPE'] = 'filesystem'
    app.debug = True
    app.run()





