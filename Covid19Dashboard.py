from flask import *
from controller.predictionController import predictionController as predictionController
import sys
sys.path.append('path-to-site-packages-for-current-working-environment')
app = Flask(__name__)

@app.route('/')
@app.route('/landing')
def landing():
     return render_template('covid19India.html')

@app.route('/analysisLanding')
def analysisLanding():
     return render_template('analysis.html')

@app.route('/stateAnalysisLanding')
def stateAnalysisLanding():
     return render_template('stateAnalysis.html')

@app.route('/metroAnalysisLanding')
def metroAnalysisLanding():
     return render_template('metroCities.html')

@app.route('/test')
def test():
     return render_template('test.html')

@app.route('/prediction')
def prediction():
     return render_template('prediction.html')

@app.route('/predictLR',methods=['GET','POST'])
def pie():
    search = request.get_json()
    # new_search = json.dumps(scrape(data))
    cumulativeDeathList = search['listC']
    cumulativeConfirmedList = search['listConfirmed']
    cumulativeRecoveredList = search['listRecovered']

    deaths = predictionController.predictProphetDeaths(cumulativeDeathList)
    confirmed = predictionController.predictProphetConfirmed(cumulativeConfirmedList)
    recovered = predictionController.predictProphetRecovered(cumulativeRecoveredList)
    #deathsLog = predictionController.predictProphetDeathsLog(cumulativeDeathList)



    return jsonify(deaths=deaths['list'], confirmed =confirmed , recovered = recovered , dmae = deaths['mae'] , cmae= confirmed['mae'] ,rmae=recovered['mae'])

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
    app.run()





