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
    predDays = search['predDays']
    deaths = predictionController.predictProphetDeaths(cumulativeDeathList,predDays)
    confirmed = predictionController.predictProphetConfirmed(cumulativeConfirmedList,predDays)
    recovered = predictionController.predictProphetRecovered(cumulativeRecoveredList,predDays)
    #lr = predictionController.predictLR(cumulativeDeathList)
    deathsLog = predictionController.predictProphetDeathsLog(cumulativeDeathList,predDays)
    confirmedLog = predictionController.predictProphetConfirmedLog(cumulativeConfirmedList,predDays)
    recoveredLog = predictionController.predictProphetRecoveredLog(cumulativeRecoveredList,predDays)



    return jsonify(deaths=deaths['list'], confirmed =confirmed['list'] , recovered = recovered['list'] , dmae = deaths['mae'] , cmae= confirmed['mae'] ,rmae=recovered['mae'],
                   deathsLog = deathsLog['list'], confirmedLog = confirmedLog['list'], recoveredLog=recoveredLog['list'],
                   ldmae=deathsLog['mae'], lcmae=confirmedLog['mae'], lrmae=recoveredLog['mae'])


@app.route('/arima')
def arima():
    return render_template("predictionArima.html")


@app.route('/predictARIMAdeaths', methods=['GET', 'POST'])
def predictARIMAdeaths():
    search = request.get_json()

    cumulativeDeathList = search['listC']

    #cumulativeConfirmedList = search['listConfirmed']
    #cumulativeRecoveredList = search['listRecovered']
    predDays = search['predDays']
    deaths = predictionController.predictArimaDeaths(cumulativeDeathList,predDays)
    #confirmed = predictionController.predictArimaConfirmed(cumulativeConfirmedList, predDays)
    #recovered = predictionController.predictArimaRecovered(cumulativeRecoveredList, predDays)

    return jsonify(deaths=deaths['list'], dmae=deaths['mae']);

@app.route('/predictARIMAconfirmed', methods=['GET', 'POST'])
def predictARIMAconfirmed():
    search = request.get_json()

    cumulativeConfirmedList = search['listConfirmed']

    predDays = search['predDays']

    confirmed = predictionController.predictArimaConfirmed(cumulativeConfirmedList, predDays)


    return jsonify(confirmed =confirmed['list'] , cmae= confirmed['mae']);


@app.route('/predictARIMArecovered', methods=['GET', 'POST'])
def predictARIMArecovered():
    search = request.get_json()


    cumulativeRecoveredList = search['listRecovered']
    predDays = search['predDays']

    recovered = predictionController.predictArimaRecovered(cumulativeRecoveredList, predDays)

    return jsonify(recovered=recovered['list'], rmae=recovered['mae']);

@app.route('/lstm')
def lstm():
    return render_template("lstm.html")

@app.route('/predictVanillaLSTMdeaths', methods=['GET', 'POST'])
def predictVanillaLSTMdeaths():
    search = request.get_json()

    cumulativeDeathList = search['listC']

    deaths = predictionController.predictVanillaLSTMdeaths(cumulativeDeathList)

    return jsonify(deaths=deaths['list'], dmae=deaths['mae']);

@app.route('/predictStackedLSTMdeaths', methods=['GET', 'POST'])
def predictStackedLSTMdeaths():
    search = request.get_json()

    cumulativeDeathList = search['listC']

    deaths = predictionController.predictStackedLSTMdeaths(cumulativeDeathList)

    return jsonify(deaths=deaths['list'], dmae=deaths['mae']);

@app.route('/predictBiDirectionalLSTMdeaths', methods=['GET', 'POST'])
def predictBiDirectionalLSTMdeaths():
    search = request.get_json()

    cumulativeDeathList = search['listC']

    deaths = predictionController.predictBidirectionalLSTMdeaths(cumulativeDeathList)

    return jsonify(deaths=deaths['list'], dmae=deaths['mae']);

@app.route('/predictCNNLSTMdeaths', methods=['GET', 'POST'])
def predictCNNLSTMdeaths():
    search = request.get_json()

    cumulativeDeathList = search['listC']

    deaths = predictionController.predictCNNLSTMdeaths(cumulativeDeathList)

    return jsonify(deaths=deaths['list'], dmae=deaths['mae']);


@app.route('/predictConvLSTMdeaths', methods=['GET', 'POST'])
def predictConvLSTMdeaths():
    search = request.get_json()

    cumulativeDeathList = search['listC']

    deaths = predictionController.predictConvLSTMdeaths(cumulativeDeathList)

    return jsonify(deaths=deaths['list'], dmae=deaths['mae']);


@app.route('/predictVectorOLSTMdeaths', methods=['GET', 'POST'])
def predictVectorOLSTMdeaths():
    search = request.get_json()

    cumulativeDeathList = search['listC']

    deaths = predictionController.predictVectorOLSTMdeaths(cumulativeDeathList)

    return jsonify(deaths=deaths['list'], dmae=deaths['mae']);

@app.route('/predictEncodedLSTMdeaths', methods=['GET', 'POST'])
def predictEncodedLSTMdeaths():
    search = request.get_json()

    cumulativeDeathList = search['listC']

    deaths = predictionController.predictEncodedLSTMdeaths(cumulativeDeathList)

    return jsonify(deaths=deaths['list'], dmae=deaths['mae']);




@app.route('/predictVanillaLSTMconfirmed', methods=['GET', 'POST'])
def predictVanillaLSTMconfirmed():
    search = request.get_json()

    cumulativeConfirmedList = search['listConfirmed']

    confirmed = predictionController.predictVanillaLSTMconfirmed(cumulativeConfirmedList)

    return jsonify(confirmed=confirmed['list'], dmae=confirmed['mae']);

@app.route('/predictStackedLSTMconfirmed', methods=['GET', 'POST'])
def predictStackedLSTMconfirmed():
    search = request.get_json()

    cumulativeConfirmedList = search['listConfirmed']

    confirmed = predictionController.predictStackedLSTMconfirmed(cumulativeConfirmedList)

    return jsonify(confirmed=confirmed['list'], dmae=confirmed['mae']);

@app.route('/predictBiDirectionalLSTMconfirmed', methods=['GET', 'POST'])
def predictBiDirectionalLSTMconfirmed():
    search = request.get_json()

    cumulativeConfirmedList = search['listConfirmed']

    confirmed = predictionController.predictBidirectionalLSTMconfirmed(cumulativeConfirmedList)

    return jsonify(confirmed=confirmed['list'], dmae=confirmed['mae']);

@app.route('/predictCNNLSTMconfirmed', methods=['GET', 'POST'])
def predictCNNLSTMconfirmed():
    search = request.get_json()

    cumulativeConfirmedList = search['listConfirmed']

    confirmed = predictionController.predictCNNLSTMconfirmed(cumulativeConfirmedList)

    return jsonify(confirmed=confirmed['list'], dmae=confirmed['mae']);


@app.route('/predictConvLSTMconfirmed', methods=['GET', 'POST'])
def predictConvLSTMconfirmed():
    search = request.get_json()

    cumulativeConfirmedList = search['listConfirmed']

    confirmed = predictionController.predictConvLSTMconfirmed(cumulativeConfirmedList)

    return jsonify(confirmed=confirmed['list'], dmae=confirmed['mae']);


@app.route('/predictVectorOLSTMconfirmed', methods=['GET', 'POST'])
def predictVectorOLSTMconfirmed():
    search = request.get_json()

    cumulativeConfirmedList = search['listConfirmed']

    confirmed = predictionController.predictVectorOLSTMconfirmed(cumulativeConfirmedList)

    return jsonify(confirmed=confirmed['list'], dmae=confirmed['mae']);

@app.route('/predictEncodedLSTMconfirmed', methods=['GET', 'POST'])
def predictEncodedLSTMconfirmed():
    search = request.get_json()

    cumulativeConfirmedList = search['listConfirmed']

    confirmed = predictionController.predictEncodedLSTMconfirmed(cumulativeConfirmedList)

    return jsonify(confirmed=confirmed['list'], dmae=confirmed['mae']);








@app.route('/predictVanillaLSTMrecovered', methods=['GET', 'POST'])
def predictVanillaLSTMrecovered():
    search = request.get_json()

    cumulativeRecoveredList = search['listRecovered']

    recovered = predictionController.predictVanillaLSTMrecovered(cumulativeRecoveredList)

    return jsonify(recovered=recovered['list'], dmae=recovered['mae']);

@app.route('/predictStackedLSTMrecovered', methods=['GET', 'POST'])
def predictStackedLSTMrecovered():
    search = request.get_json()

    cumulativeRecoveredList = search['listRecovered']

    recovered = predictionController.predictStackedLSTMrecovered(cumulativeRecoveredList)

    return jsonify(recovered=recovered['list'], dmae=recovered['mae']);

@app.route('/predictBiDirectionalLSTMrecovered', methods=['GET', 'POST'])
def predictBiDirectionalLSTMrecovered():
    search = request.get_json()

    cumulativeRecoveredList = search['listRecovered']

    recovered = predictionController.predictBidirectionalLSTMrecovered(cumulativeRecoveredList)

    return jsonify(recovered=recovered['list'], dmae=recovered['mae']);

@app.route('/predictCNNLSTMrecovered', methods=['GET', 'POST'])
def predictCNNLSTMrecovered():
    search = request.get_json()

    cumulativeRecoveredList = search['listRecovered']

    recovered = predictionController.predictCNNLSTMrecovered(cumulativeRecoveredList)

    return jsonify(recovered=recovered['list'], dmae=recovered['mae']);


@app.route('/predictConvLSTMrecovered', methods=['GET', 'POST'])
def predictConvLSTMrecovered():
    search = request.get_json()

    cumulativeRecoveredList = search['listRecovered']

    recovered = predictionController.predictConvLSTMrecovered(cumulativeRecoveredList)

    return jsonify(recovered=recovered['list'], dmae=recovered['mae']);


@app.route('/predictVectorOLSTMrecovered', methods=['GET', 'POST'])
def predictVectorOLSTMrecovered():
    search = request.get_json()

    cumulativeRecoveredList = search['listRecovered']

    recovered = predictionController.predictVectorOLSTMrecovered(cumulativeRecoveredList)

    return jsonify(recovered=recovered['list'], dmae=recovered['mae']);

@app.route('/predictEncodedLSTMrecovered', methods=['GET', 'POST'])
def predictEncodedLSTMrecovered():
    search = request.get_json()

    cumulativeRecoveredList = search['listRecovered']

    recovered = predictionController.predictEncodedLSTMrecovered(cumulativeRecoveredList)

    return jsonify(recovered=recovered['list'], dmae=recovered['mae']);


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





