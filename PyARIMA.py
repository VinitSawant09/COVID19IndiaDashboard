import pandas as pd
from sklearn import metrics
import matplotlib.pyplot as plt
import datetime
from decimal import *
class PyARIMA:

    def predictArimaDeaths(listC,predDays):

        listC = [['2020-03-13', 2], ['2020-03-14', 2], ['2020-03-15', 2], ['2020-03-16', 2], ['2020-03-17', 3],
                 ['2020-03-18', 3], ['2020-03-19', 4], ['2020-03-20', 4], ['2020-03-21', 4], ['2020-03-22', 7],
                 ['2020-03-23', 8], ['2020-03-24', 10], ['2020-03-25', 10], ['2020-03-26', 15], ['2020-03-27', 17],
                 ['2020-03-28', 19], ['2020-03-29', 27], ['2020-03-30', 31], ['2020-03-31', 35], ['2020-04-01', 41],
                 ['2020-04-02', 53], ['2020-04-03', 62], ['2020-04-04', 75], ['2020-04-05', 83], ['2020-04-06', 111],
                 ['2020-04-07', 124], ['2020-04-08', 149], ['2020-04-09', 169], ['2020-04-10', 206],
                 ['2020-04-11', 242], ['2020-04-12', 273], ['2020-04-13', 324], ['2020-04-14', 353],
                 ['2020-04-15', 392], ['2020-04-16', 420], ['2020-04-17', 452], ['2020-04-18', 488],
                 ['2020-04-19', 519], ['2020-04-20', 559], ['2020-04-21', 603], ['2020-04-22', 652],
                 ['2020-04-23', 686], ['2020-04-24', 723], ['2020-04-25', 779], ['2020-04-26', 826],
                 ['2020-04-27', 886], ['2020-04-28', 937], ['2020-04-29', 1008], ['2020-04-30', 1075],
                 ['2020-05-01', 1152], ['2020-05-02', 1223], ['2020-05-03', 1306], ['2020-05-04', 1389],
                 ['2020-05-05', 1583], ['2020-05-06', 1694], ['2020-05-07', 1783], ['2020-05-08', 1886],
                 ['2020-05-09', 1981], ['2020-05-10', 2109], ['2020-05-11', 2206], ['2020-05-12', 2293],
                 ['2020-05-13', 2415], ['2020-05-14', 2549], ['2020-05-15', 2649], ['2020-05-16', 2752],
                 ['2020-05-17', 2872], ['2020-05-18', 3029], ['2020-05-19', 3163], ['2020-05-20', 3303],
                 ['2020-05-21', 3435], ['2020-05-22', 3583], ['2020-05-23', 3720], ['2020-05-24', 3867],
                 ['2020-05-25', 4021], ['2020-05-26', 4167], ['2020-05-27', 4337], ['2020-05-28', 4531],
                 ['2020-05-29', 4706], ['2020-05-30', 4971], ['2020-05-31', 5164], ['2020-06-01', 5394],
                 ['2020-06-02', 5598], ['2020-06-03', 5815], ['2020-06-04', 6075], ['2020-06-05', 6348],
                 ['2020-06-06', 6642], ['2020-06-07', 6929], ['2020-06-08', 7200], ['2020-06-09', 7471],
                 ['2020-06-10', 7745], ['2020-06-11', 8102], ['2020-06-12', 8498], ['2020-06-13', 8884],
                 ['2020-06-14', 9195], ['2020-06-15', 9520], ['2020-06-16', 9900], ['2020-06-17', 11903],
                 ['2020-06-18', 12237], ['2020-06-19', 12573], ['2020-06-20', 12948], ['2020-06-21', 13254],
                 ['2020-06-22', 13699], ['2020-06-23', 14011], ['2020-06-24', 14476], ['2020-06-25', 14894],
                 ['2020-06-26', 15301], ['2020-06-27', 15685], ['2020-06-28', 16095], ['2020-06-29', 16475],
                 ['2020-06-30', 16893], ['2020-07-01', 17400], ['2020-07-02', 17834], ['2020-07-03', 18213],
                 ['2020-07-04', 18655], ['2020-07-05', 19268], ['2020-07-06', 19693], ['2020-07-07', 20160],
                 ['2020-07-08', 20642], ['2020-07-09', 21129], ['2020-07-10', 21604], ['2020-07-11', 22123],
                 ['2020-07-12', 22674], ['2020-07-13', 23174], ['2020-07-14', 23727], ['2020-07-15', 24309],
                 ['2020-07-16', 24915], ['2020-07-17', 25602], ['2020-07-18', 26273], ['2020-07-19', 26816],
                 ['2020-07-20', 27497], ['2020-07-21', 28084]]

        base = datetime.datetime.today() - datetime.timedelta(days=1)
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
        print(df)
        from statsmodels.tsa.seasonal import seasonal_decompose
        result = seasonal_decompose(df)

        import six
        import sys
        sys.modules['sklearn.externals.six'] = six

        import joblib
        sys.modules['sklearn.externals.joblib'] = joblib
        from pmdarima.arima import auto_arima

        # testIndex= int(98/100*len(listC))
        # print(testIndex)
        train = df.iloc[0:length - 10]
        # print(train)
        test = df.iloc[length - 10:length - 5]
        # print(test)
        # print(test.shape)
        # print(train.shape)
        # plt.plot(train)
        # plt.plot(test)
        # plt.show()

        Arima_model = auto_arima(train, start_p=1, start_q=2, max_p=8, max_q=8,
                                 start_P=0, m=4, max_Q=8, seasonal=True,
                                 D=1, trace=True,
                                 error_action='ignore',
                                 suppress_warnings=True,
                                 stepwise=True)

        # print(Arima_model.summary());
        prediction = pd.DataFrame(Arima_model.predict(n_periods=len(test)), index=test.index)
        prediction.columns = ['Predicted']
        # print(prediction);

        # plt.figure(figsize=(15,10))
        # plt.plot(train, label='Training')
        # plt.plot(test, label='Test')
        # plt.plot(prediction, label='Prediction')
        # plt.legend(loc='upper center')
        # plt.show();
        # print(prediction['Predicted'])

        test['Predicted'] = prediction['Predicted'].copy()

        test['Error'] = test['Deaths'] - test['Predicted']

        print("Mean Absolute Error = %s" % metrics.mean_absolute_error(test['Deaths'], test['Predicted']))
        print("Mean Squared Error = %s" % metrics.mean_squared_error(test['Deaths'], test['Predicted']))
        print("Median Absolute Error = %s" % metrics.median_absolute_error(test['Deaths'], test['Predicted']))

        train = df.iloc[:length - 5]

        test = df.iloc[length - 5:]
        print(test)
        Arima_model = auto_arima(train, start_p=1, start_q=2, max_p=8, max_q=8,
                                 start_P=0, m=4, max_Q=8, seasonal=True,
                                 D=1, trace=True,
                                 error_action='ignore',
                                 suppress_warnings=True,
                                 stepwise=True)
        prediction = pd.DataFrame(Arima_model.predict(n_periods=len(test)), index=test.index)
        prediction.columns = ['Predicted']
        prediction = prediction.round()
        print(prediction)

        return prediction
