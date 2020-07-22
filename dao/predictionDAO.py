import pandas as pd
import numpy as np
import math
from fbprophet import Prophet
from datetime import datetime
from sklearn.metrics import mean_squared_error, r2_score, mean_absolute_error
class predictionDAO:


    def meanAbsolutePercentageError(y_true, y_pred):

        y_true,y_pred = np.array(y_true),np.array(y_pred)
        return np.mean(np.abs((y_true-y_pred)/y_true))*100

    def predictProphetDeaths(listC,predDays):

        print("inside predictProphetDeaths predictionDAO")
        print(listC)
        df = pd.DataFrame(listC, columns=['ds', 'y'])

        print(df);
        m = Prophet()
        m.fit(df)
        future = m.make_future_dataframe(periods=int(predDays))
        forecast = m.predict(future)

        print(forecast.tail())

       # cv_results = cross_validation(forecast, horizon='30 days')
       # mape_baseline = predictionDAO.meanAbsolutePercentageError(cv_results.y, cv_results.yhat)
       # print("MAPE = %s" % mape_baseline)

        metric_df = forecast.set_index('ds')[['yhat']].join(df.set_index('ds').y).reset_index()
        metric_df.dropna(inplace=True)



        print("R squared = %s" % r2_score(metric_df.y, metric_df.yhat));
        print("Root Mean Squared Error = %s" % math.sqrt(mean_squared_error(metric_df.y, metric_df.yhat)));
        print("Mean Absolute Error = %s" % mean_absolute_error(metric_df.y, metric_df.yhat));
        mae =  mean_absolute_error(metric_df.y, metric_df.yhat)
        print(forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].tail())

        finalList = forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].values.tolist()
        for i in range(0, len(finalList)):
            finalList[i][0] = round(datetime.timestamp(finalList[i][0])*1000)
        #print(len(finalResponse));
        response = {}
        response["list"] = finalList
        response["mae"] = mae
        return response

    def predictProphetConfirmed(listC,predDays):

        print("inside predictProphetConfirmed predictionDAO")
        #print(listC)
        df = pd.DataFrame(listC, columns=['ds', 'y'])
        #print(df);

        m = Prophet()
        m.fit(df)
        future = m.make_future_dataframe(periods=int(predDays))
        future.tail()
        forecast = m.predict(future)
        metric_df = forecast.set_index('ds')[['yhat']].join(df.set_index('ds').y).reset_index()
        metric_df.dropna(inplace=True)
        print(metric_df.isnull().any())
        #mape_baseline = predictionDAO.meanAbsolutePercentageError(metric_df.y, metric_df.yhat)
        #print("MAPE = %s" % mape_baseline)
        print("R squared = %s" % r2_score(metric_df.y, metric_df.yhat));
        mae = mean_absolute_error(metric_df.y, metric_df.yhat)
        print("Mean Squared Error = %s" % math.sqrt(mean_squared_error(metric_df.y, metric_df.yhat)));
        print("Mean Absolute Error = %s" % mean_absolute_error(metric_df.y, metric_df.yhat));
        print(forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].tail())
        finalList = forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].values.tolist()
        for i in range(0, len(finalList)):
            finalList[i][0] = round(datetime.timestamp(finalList[i][0])*1000)
        #print(len(finalResponse));
        #m.plot(forecast)
        response = {}
        response["list"] = finalList
        response["mae"] = mae
        return response

    def predictProphetRecovered(listC,predDays):

        print("inside predictProphetRecovered predictionDAO")
        #print(listC)
        df = pd.DataFrame(listC, columns=['ds', 'y'])
        #print(df);
        m = Prophet()

        m.fit(df)
        future = m.make_future_dataframe(periods=int(predDays))
        future.tail()

        forecast = m.predict(future)
        metric_df = forecast.set_index('ds')[['yhat']].join(df.set_index('ds').y).reset_index()
        metric_df.dropna(inplace=True)
        print(metric_df.isnull().any())
        #mape_baseline = predictionDAO.meanAbsolutePercentageError(metric_df.y, metric_df.yhat)
        #print("MAPE = %s" % mape_baseline)
        print("R squared = %s" % r2_score(metric_df.y, metric_df.yhat));
        print("Root Mean Squared Error = %s" % math.sqrt(mean_squared_error(metric_df.y, metric_df.yhat)));
        mae = mean_absolute_error(metric_df.y, metric_df.yhat);
        print("Mean Absolute Error = %s" % mean_absolute_error(metric_df.y, metric_df.yhat));
        print(forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].tail())
        finalList = forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].values.tolist()
        for i in range(0, len(finalList)):
            finalList[i][0] = round(datetime.timestamp(finalList[i][0])*1000)
        #print(len(finalResponse));
        #m.plot(forecast)
        response = {}
        response["list"] = finalList
        response["mae"] =  mae
        return response

    def predictProphetDeathsLog(listC,predDays):

        print("inside predictProphetDeathsLog predictionDAO")
        print(listC)
        df = pd.DataFrame(listC, columns=['ds', 'y'])

        df['cap'] = 100000
        print(df);
        m = Prophet(growth='logistic')
        m.fit(df)
        future = m.make_future_dataframe(periods=int(predDays))
        future['cap'] = 100000
        forecast = m.predict(future)

        print(forecast.tail())

        # cv_results = cross_validation(forecast, horizon='30 days')
        # mape_baseline = predictionDAO.meanAbsolutePercentageError(cv_results.y, cv_results.yhat)
        # print("MAPE = %s" % mape_baseline)

        metric_df = forecast.set_index('ds')[['yhat']].join(df.set_index('ds').y).reset_index()
        metric_df.dropna(inplace=True)

        print("R squared = %s" % r2_score(metric_df.y, metric_df.yhat));
        print("Root Mean Squared Error = %s" % math.sqrt(mean_squared_error(metric_df.y, metric_df.yhat)));
        print("Mean Absolute Error = %s" % mean_absolute_error(metric_df.y, metric_df.yhat));
        mae = mean_absolute_error(metric_df.y, metric_df.yhat)
        print(forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].tail())

        finalList = forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].values.tolist()
        for i in range(0, len(finalList)):
            finalList[i][0] = round(datetime.timestamp(finalList[i][0]) * 1000)
        # print(len(finalResponse));
        response = {}
        response["list"] = finalList
        response["mae"] = mae
        return response

    def predictProphetConfirmedLog(listC,predDays):

        print("inside predictProphetConfirmedLog predictionDAO")
        #print(listC)
        df = pd.DataFrame(listC, columns=['ds', 'y'])
        #print(df);
        df['cap'] = 2000000
        m = Prophet(growth='logistic')
        m.fit(df)
        future = m.make_future_dataframe(periods=int(predDays))
        future.tail()
        future['cap'] = 2000000
        forecast = m.predict(future)
        metric_df = forecast.set_index('ds')[['yhat']].join(df.set_index('ds').y).reset_index()
        metric_df.dropna(inplace=True)
        print(metric_df.isnull().any())
        #mape_baseline = predictionDAO.meanAbsolutePercentageError(metric_df.y, metric_df.yhat)
        #print("MAPE = %s" % mape_baseline)
        print("R squared = %s" % r2_score(metric_df.y, metric_df.yhat));
        mae = mean_absolute_error(metric_df.y, metric_df.yhat)
        print("Mean Squared Error = %s" % math.sqrt(mean_squared_error(metric_df.y, metric_df.yhat)));
        print("Mean Absolute Error = %s" % mean_absolute_error(metric_df.y, metric_df.yhat));
        print(forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].tail())
        finalList = forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].values.tolist()
        for i in range(0, len(finalList)):
            finalList[i][0] = round(datetime.timestamp(finalList[i][0])*1000)
        #print(len(finalResponse));
        #m.plot(forecast)
        response = {}
        response["list"] = finalList
        response["mae"] = mae
        return response

    def predictProphetRecoveredLog(listC,predDays):

        print("inside predictProphetRecoveredLog predictionDAO")
        #print(listC)
        df = pd.DataFrame(listC, columns=['ds', 'y'])
        #print(df);
        df['cap'] = 2000000
        m = Prophet(growth='logistic')

        m.fit(df)
        future = m.make_future_dataframe(periods=int(predDays))
        future.tail()
        future['cap'] = 2000000
        forecast = m.predict(future)
        metric_df = forecast.set_index('ds')[['yhat']].join(df.set_index('ds').y).reset_index()
        metric_df.dropna(inplace=True)
        print(metric_df.isnull().any())
        #mape_baseline = predictionDAO.meanAbsolutePercentageError(metric_df.y, metric_df.yhat)
        #print("MAPE = %s" % mape_baseline)
        print("R squared = %s" % r2_score(metric_df.y, metric_df.yhat));
        print("Root Mean Squared Error = %s" % math.sqrt(mean_squared_error(metric_df.y, metric_df.yhat)));
        mae = mean_absolute_error(metric_df.y, metric_df.yhat);
        print("Mean Absolute Error = %s" % mean_absolute_error(metric_df.y, metric_df.yhat));
        print(forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].tail())
        finalList = forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].values.tolist()
        for i in range(0, len(finalList)):
            finalList[i][0] = round(datetime.timestamp(finalList[i][0])*1000)
        #print(len(finalResponse));
        #m.plot(forecast)
        response = {}
        response["list"] = finalList
        response["mae"] =  mae
        return response
