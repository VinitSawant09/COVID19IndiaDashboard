import pandas as pd
from sklearn import metrics
import datetime
import six
import sys

sys.modules['sklearn.externals.six'] = six
import joblib
sys.modules['sklearn.externals.joblib'] = joblib
from pmdarima.arima import auto_arima

class arimaDAO:

    def predictArimaDeaths(listC, predDays):
        print(listC)
        base = datetime.datetime.today() #- datetime.timedelta(days=1)
        for x in range(1, 6):
            arrObj = []
            arrObj.append((base + datetime.timedelta(days=x)).strftime("%Y-%m-%d"))
            arrObj.append(0)
            listC.append(arrObj)
        length = len(listC)
        df = pd.DataFrame(listC, columns=['ds', 'y'])
        df.set_index('ds', inplace=True)

        df.index = pd.to_datetime(df.index)
        df.columns = ['Deaths']

        train = df.iloc[0:length - predDays * 2]
        test = df.iloc[length - predDays * 2:length - predDays]
        Arima_model = auto_arima(train, start_p=1, start_q=2, max_p=8, max_q=8,
                                 start_P=0, m=4, max_Q=8, seasonal=True,
                                 D=1, trace=True,
                                 error_action='ignore',
                                 suppress_warnings=True,
                                 stepwise=True)

        prediction = pd.DataFrame(Arima_model.predict(n_periods=len(test)), index=test.index)
        prediction.columns = ['Predicted']

        test['Predicted'] = prediction['Predicted'].copy()
        test['Error'] = test['Deaths'] - test['Predicted']
        mae = metrics.mean_absolute_error(test['Deaths'], test['Predicted'])
        print("Mean Absolute Error = %s" % metrics.mean_absolute_error(test['Deaths'], test['Predicted']))
        print("Mean Squared Error = %s" % metrics.mean_squared_error(test['Deaths'], test['Predicted']))
        print("Median Absolute Error = %s" % metrics.median_absolute_error(test['Deaths'], test['Predicted']))

        train = df.iloc[:length - predDays]
        test = df.iloc[length - predDays:]
        Arima_model = auto_arima(train, start_p=1, start_q=2, max_p=8, max_q=8,
                                 start_P=0, m=4, max_Q=8, seasonal=True,
                                 D=1, trace=True,
                                 error_action='ignore',
                                 suppress_warnings=True,
                                 stepwise=True)

        prediction = pd.DataFrame(Arima_model.predict(n_periods=len(test)), index=test.index)
        prediction.columns = ['Predicted']
        prediction = prediction.round()
        #print(prediction)
        prediction = prediction.reset_index()
        #print(prediction)
        finalList = prediction[['ds', 'Predicted']].values.tolist()
        from datetime import datetime as datetimenew
        for i in range(0, len(finalList)):
            finalList[i][0] = round(datetimenew.timestamp(finalList[i][0]) * 1000)
        response = {}

        print(finalList)
        response["list"] = finalList
        response["mae"] = mae
        return response


    def predictArimaConfirmed(listC, predDays):
        #predDays = predDays * 6
        base = datetime.datetime.today() #- datetime.timedelta(days=1)
        for x in range(1, 6):
            arrObj = []
            arrObj.append((base + datetime.timedelta(days=x)).strftime("%Y-%m-%d"))
            arrObj.append(0)
            listC.append(arrObj)
        length = len(listC)
        df = pd.DataFrame(listC, columns=['ds', 'y'])
        df.set_index('ds', inplace=True)

        df.index = pd.to_datetime(df.index)
        df.columns = ['Confirmed']

        train = df.iloc[0:length - predDays*2]
        test = df.iloc[length - predDays *2:length - predDays]
        Arima_model = auto_arima(train, start_p=1, start_q=2, max_p=8, max_q=8,
                                 start_P=0, m=4, max_Q=8, seasonal=True,
                                 D=1, trace=True,
                                 error_action='ignore',
                                 suppress_warnings=True,
                                 stepwise=True)

        prediction = pd.DataFrame(Arima_model.predict(n_periods=len(test)), index=test.index)
        prediction.columns = ['Predicted']

        test['Predicted'] = prediction['Predicted'].copy()
        test['Error'] = test['Confirmed'] - test['Predicted']
        mae = metrics.mean_absolute_error(test['Confirmed'], test['Predicted'])
        print("Mean Absolute Error = %s" % metrics.mean_absolute_error(test['Confirmed'], test['Predicted']))
        print("Mean Squared Error = %s" % metrics.mean_squared_error(test['Confirmed'], test['Predicted']))
        print("Median Absolute Error = %s" % metrics.median_absolute_error(test['Confirmed'], test['Predicted']))

        train = df.iloc[:length - predDays]
        test = df.iloc[length - predDays:]
        Arima_model = auto_arima(train, start_p=1, start_q=2, max_p=8, max_q=8,
                                 start_P=0, m=4, max_Q=8, seasonal=True,
                                 D=1, trace=True,
                                 error_action='ignore',
                                 suppress_warnings=True,
                                 stepwise=True)

        prediction = pd.DataFrame(Arima_model.predict(n_periods=len(test)), index=test.index)
        prediction.columns = ['Predicted']
        prediction = prediction.round()
        #print(prediction)
        prediction = prediction.reset_index()
        #print(prediction)
        finalList = prediction[['ds', 'Predicted']].values.tolist()
        from datetime import datetime as datetimenew
        for i in range(0, len(finalList)):
            finalList[i][0] = round(datetimenew.timestamp(finalList[i][0]) * 1000)
        response = {}
        response["list"] = finalList
        response["mae"] = mae
        return response

    def predictArimaRecovered(listC, predDays):

        base = datetime.datetime.today() #- datetime.timedelta(days=1)
        for x in range(1, 6):
            arrObj = []
            arrObj.append((base + datetime.timedelta(days=x)).strftime("%Y-%m-%d"))
            arrObj.append(0)
            listC.append(arrObj)
        length = len(listC)
        df = pd.DataFrame(listC, columns=['ds', 'y'])
        df.set_index('ds', inplace=True)

        df.index = pd.to_datetime(df.index)
        df.columns = ['Recovered']

        train = df.iloc[0:length - predDays * 2]
        test = df.iloc[length - predDays * 2:length - predDays]
        Arima_model = auto_arima(train, start_p=1, start_q=2, max_p=8, max_q=8,
                                 start_P=0, m=4, max_Q=8, seasonal=True,
                                 D=1, trace=True,
                                 error_action='ignore',
                                 suppress_warnings=True,
                                 stepwise=True)

        prediction = pd.DataFrame(Arima_model.predict(n_periods=len(test)), index=test.index)
        prediction.columns = ['Predicted']

        test['Predicted'] = prediction['Predicted'].copy()
        test['Error'] = test['Recovered'] - test['Predicted']
        mae = metrics.mean_absolute_error(test['Recovered'], test['Predicted'])
        print("Mean Absolute Error = %s" % metrics.mean_absolute_error(test['Recovered'], test['Predicted']))
        print("Mean Squared Error = %s" % metrics.mean_squared_error(test['Recovered'], test['Predicted']))
        print("Median Absolute Error = %s" % metrics.median_absolute_error(test['Recovered'], test['Predicted']))

        train = df.iloc[:length - predDays]
        test = df.iloc[length - predDays:]
        Arima_model = auto_arima(train, start_p=1, start_q=2, max_p=8, max_q=8,
                                 start_P=0, m=4, max_Q=8, seasonal=True,
                                 D=1, trace=True,
                                 error_action='ignore',
                                 suppress_warnings=True,
                                 stepwise=True)

        prediction = pd.DataFrame(Arima_model.predict(n_periods=len(test)), index=test.index)
        prediction.columns = ['Predicted']
        prediction = prediction.round()
        #print(prediction)
        prediction = prediction.reset_index()
        #print(prediction)
        finalList = prediction[['ds', 'Predicted']].values.tolist()
        from datetime import datetime as datetimenew
        for i in range(0, len(finalList)):
            finalList[i][0] = round(datetimenew.timestamp(finalList[i][0]) * 1000)
        response = {}
        response["list"] = finalList
        response["mae"] = mae
        return response
