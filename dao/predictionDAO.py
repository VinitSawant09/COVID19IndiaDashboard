import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn import metrics
from sklearn.model_selection import train_test_split
from sklearn.metrics import max_error
from fbprophet import Prophet
from fbprophet.diagnostics import cross_validation, performance_metrics
import matplotlib.pyplot as plt
from datetime import datetime
from sklearn.metrics import mean_squared_error, r2_score, mean_absolute_error
class predictionDAO:


    def meanAbsolutePercentageError(y_true, y_pred):

        y_true,y_pred = np.array(y_true),np.array(y_pred)
        return np.mean(np.abs((y_true-y_pred)/y_true))*100

    def predictLR (listC):

         print("inside predictLR predictionDAO")
         print(listC)
         # Create the pandas DataFrame
         df = pd.DataFrame(listC, columns=['Day', 'Count'])
         print(df)
         X = df.iloc[:, :-1].values
         y = df.iloc[:, 1].values


         X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)


         regressor = LinearRegression()
         regressor.fit(X_train, y_train)
         print(regressor.intercept_)
         print(regressor.coef_)

         y_pred = regressor.predict(X_test)

         df = pd.DataFrame({'Actual': y_test, 'Predicted': y_pred})
         print(df)


         print('Mean Absolute Error:', metrics.mean_absolute_error(y_test, y_pred))
         print('Mean Squared Error:', metrics.mean_squared_error(y_test, y_pred))
         print('Root Mean Squared Error:', np.sqrt(metrics.mean_squared_error(y_test, y_pred)))

         from sklearn.metrics import accuracy_score
         print(metrics.r2_score(y_test, y_pred))

         return "yes"

    def predictLSTM(listC):

        print("inside predictLSTM predictionDAO")

        # Create the pandas DataFrame
        df = pd.DataFrame(listC, columns=['Day', 'Count'])
        print(df);
        #df = df.set_index('Day')
        #print(df)
        #sns.lineplot(x=df.index, y ='Count' , data= df)
        #plt.show()
        #print(df[:-25])
        #print(df[-25:])
        #train, test = df[:-25], df[-25:]
        #scaler = MinMaxScaler()
        #scaler.fit(train)
        #train = scaler.transform(train)
        #test = scaler.transform(test)

       # n_input = 25
       # n_features = 1
       # generator = TimeSeriesGenerator(train,train,length=n_input,batch_size=6)
       # model = Sequential()
       # model.add(LSTM(200,activation='relu',input_shape(n_input,n_features)))
       # model.add(Dropout(0.15))
       # model.add(Dense(1))
       # model.compile(optimizer='adam',loss='mse')
        #print( df["Day"])
        #print(df["Count"])
        X = df.iloc[:, :-1].values
        y = df.iloc[:, 1].values
        linear_regr = LinearRegression()
        linear_regr.fit(X,y)
        y_pred = linear_regr.predict(X)
        error = max_error(y,y_pred)
        X_test = []
        future_days = 55
        for i in range(125,245):
            X_test.append([i])
        y_pred_linear = linear_regr.predict(X_test)
        print("Linear Regression Model Score: %s" %linear_regr.score(X,y))
        print(y_pred_linear)
        y_pred_max = []
        y_pred_min = []
        for i in range(0, len(y_pred_linear)):
            y_pred_max.append(y_pred_linear[i] + error)
            y_pred_min.append(y_pred_linear[i] - error)

        print(y_pred_max)
        plt.grid()
        plt.scatter(X,y)
        plt.plot(X_test,y_pred_linear,color='green', linewidth=2)
        plt.plot(X_test, y_pred_max, color='red', linewidth= 1, linestyle = 'dashed')
        plt.plot(X_test, y_pred_min, color='red', linewidth=1, linestyle='dashed')
        plt.xlabel('Days')


        plt.ylabel('Cases')
        plt.yscale('log')
        plt.show()
        return "yes"

    def predictProphetDeaths(listC):

        print("inside predictProphetDeaths predictionDAO")
        print(listC)
        df = pd.DataFrame(listC, columns=['ds', 'y'])
        print(df);
        m = Prophet()
        m.fit(df)
        future = m.make_future_dataframe(periods=5)

        forecast = m.predict(future)
        print(forecast.tail())

       # cv_results = cross_validation(forecast, horizon='30 days')
       # mape_baseline = predictionDAO.meanAbsolutePercentageError(cv_results.y, cv_results.yhat)
       # print("MAPE = %s" % mape_baseline)

        metric_df = forecast.set_index('ds')[['yhat']].join(df.set_index('ds').y).reset_index()
        metric_df.dropna(inplace=True)



        print("R squared = %s" % r2_score(metric_df.y, metric_df.yhat));
        print("Mean Squared Error = %s" % mean_squared_error(metric_df.y, metric_df.yhat));
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

    def predictProphetConfirmed(listC):

        print("inside predictProphetConfirmed predictionDAO")
        #print(listC)
        df = pd.DataFrame(listC, columns=['ds', 'y'])
        #print(df);
        m = Prophet()
        m.fit(df)
        future = m.make_future_dataframe(periods=5)
        future.tail()
        forecast = m.predict(future)
        metric_df = forecast.set_index('ds')[['yhat']].join(df.set_index('ds').y).reset_index()
        metric_df.dropna(inplace=True)
        print(metric_df.isnull().any())
        #mape_baseline = predictionDAO.meanAbsolutePercentageError(metric_df.y, metric_df.yhat)
        #print("MAPE = %s" % mape_baseline)
        print("R squared = %s" % r2_score(metric_df.y, metric_df.yhat));
        mae = mean_absolute_error(metric_df.y, metric_df.yhat)
        print("Mean Squared Error = %s" % mean_squared_error(metric_df.y, metric_df.yhat));
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

    def predictProphetRecovered(listC):

        print("inside predictProphetRecovered predictionDAO")
        #print(listC)
        df = pd.DataFrame(listC, columns=['ds', 'y'])
        #print(df);
        m = Prophet()
        m.fit(df)
        future = m.make_future_dataframe(periods=5)
        future.tail()
        forecast = m.predict(future)
        metric_df = forecast.set_index('ds')[['yhat']].join(df.set_index('ds').y).reset_index()
        metric_df.dropna(inplace=True)
        print(metric_df.isnull().any())
        #mape_baseline = predictionDAO.meanAbsolutePercentageError(metric_df.y, metric_df.yhat)
        #print("MAPE = %s" % mape_baseline)
        print("R squared = %s" % r2_score(metric_df.y, metric_df.yhat));
        print("Mean Squared Error = %s" % mean_squared_error(metric_df.y, metric_df.yhat));
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

    def predictProphetDeathsLog(listC):

        print("inside predictProphetDeathsLog predictionDAO")
        print(listC)
        df = pd.DataFrame(listC, columns=['ds', 'y'])
        print(df);
        df['cap'] = 1380004385
        m = Prophet(growth='logistic')
        m.fit(df)
        future = m.make_future_dataframe(periods=5)
        future['cap'] = 1380004385
        future.tail()
        forecast = m.predict(future)
        fig1 = m.plot(forecast)

        #plt.savefig('foo.png')
        print(forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].tail())
        finalResponse = forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].values.tolist()
        for i in range(0, len(finalResponse)):
            finalResponse[i][0] = round(datetime.timestamp(finalResponse[i][0])*1000)
        #print(len(finalResponse));
        #m.plot(forecast)
        return finalResponse

