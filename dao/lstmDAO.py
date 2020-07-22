# univariate lstm example
import os
os.environ['PYTHONHASHSEED'] = '0'
os.environ['CUDA_VISIBLE_DEVICES']='-1'
os.environ['TF_CUDNN_USE_AUTOTUNE'] ='0'
import numpy as np
import random as rn
import tensorflow as tf
rn.seed(1)
np.random.seed(1)
from tensorflow import set_random_seed
set_random_seed(1)
from numpy import array
import keras
from keras import backend as k
config = tf.ConfigProto(intra_op_parallelism_threads=1, inter_op_parallelism_threads=1,
allow_soft_placement=True, device_count = {'CPU': 1})
sess = tf.Session(graph=tf.get_default_graph(),config=config)
k.set_session(sess)
from keras.models import Sequential
from keras.layers import LSTM, Bidirectional, TimeDistributed, Conv1D, MaxPooling1D, Flatten, ConvLSTM2D, RepeatVector
from keras.layers import Dense
keras.optimizers.Adam(lr=0.01)
# split a univariate sequence into samples

class lstmDAO:

        def split_sequence(sequence, n_steps):
            X, y = list(), list()
            for i in range(len(sequence)):
                # find the end of this pattern
                end_ix = i + n_steps
                # check if we are beyond the sequence
                if end_ix > len(sequence)-1:
                    break
                # gather input and output parts of the pattern
                seq_x, seq_y = sequence[i:end_ix], sequence[end_ix]
                X.append(seq_x)
                y.append(seq_y)
            return array(X), array(y)


        def split_sequenceMS(sequence, n_steps_in, n_steps_out):

            X, y = list(), list()
            for i in range(len(sequence)):
                # find the end of this pattern
                end_ix = i + n_steps_in
                out_end_ix = end_ix + n_steps_out
                # check if we are beyond the sequence
                if out_end_ix > len(sequence):
                    break
                # gather input and output parts of the pattern
                seq_x, seq_y = sequence[i:end_ix], sequence[end_ix:out_end_ix]
                X.append(seq_x)
                y.append(seq_y)
            return array(X), array(y)

        def vanillaLSTMdeaths(deaths):
            # define input sequence
            #deaths = [ [7, 2], [8, 3], [9, 3], [10, 4], [11, 4], [12, 4], [13, 7], [14, 8], [15, 10], [16, 10], [17, 15], [18, 17], [19, 19], [20, 27], [21, 31], [22, 35], [23, 41], [24, 53], [25, 62], [26, 75], [27, 83], [28, 111], [29, 124], [30, 149], [31, 169], [32, 206], [33, 242], [34, 273], [35, 324], [36, 353], [37, 392], [38, 420], [39, 452], [40, 488], [41, 519], [42, 559], [43, 603], [44, 652], [45, 686], [46, 723], [47, 779], [48, 826], [49, 886], [50, 937], [51, 1008], [52, 1075], [53, 1152], [54, 1223], [55, 1306], [56, 1389], [57, 1583], [58, 1694], [59, 1783], [60, 1886], [61, 1981], [62, 2109], [63, 2206], [64, 2293], [65, 2415], [66, 2549], [67, 2649], [68, 2752], [69, 2872], [70, 3029], [71, 3163], [72, 3303], [73, 3435], [74, 3583], [75, 3720], [76, 3867], [77, 4021], [78, 4167], [79, 4337], [80, 4531], [81, 4706], [82, 4971], [83, 5164], [84, 5394], [85, 5598], [86, 5815], [87, 6075], [88, 6348], [89, 6642], [90, 6929], [91, 7200], [92, 7471], [93, 7745], [94, 8102], [95, 8498], [96, 8884], [97, 9195], [98, 9520], [99, 9900], [100, 11903], [101, 12237], [102, 12573], [103, 12948], [104, 13254], [105, 13699], [106, 14011], [107, 14476], [108, 14894], [109, 15301], [110, 15685], [111, 16095], [112, 16475], [113, 16893], [114, 17400], [115, 17834], [116, 18213], [117, 18655], [118, 19268], [119, 19693], [120, 20160], [121, 20642], [122, 21129], [123, 21604], [124, 22123], [125, 22674], [126, 23174], [127, 23727],[128, 24309], [129, 24915], [130, 25602], [131, 26273], [132, 26816], [133, 27497]]
            raw_seq = []
            deaths = deaths[6:]

            for i in range(0, len(deaths)):
                raw_seq.append(deaths[i][1])

            print(raw_seq)
            # choose a number of time steps
            n_steps = 3
            # split into samples
            X, y = lstmDAO.split_sequence(raw_seq, n_steps)
            # reshape from [samples, timesteps] into [samples, timesteps, features]
            n_features = 1
            X = X.reshape((X.shape[0], X.shape[1], n_features))
            # define model
            model = Sequential()
            model.add(LSTM(50, activation='relu', input_shape=(n_steps, n_features)))
            model.add(Dense(1))
            model.compile(optimizer='adam', loss='mse')
            # fit model
            model.fit(X, y, epochs=200, verbose=0)
            # demonstrate prediction
            x_input = array([raw_seq[-3], raw_seq[-2], raw_seq[-1]])
            x_input = x_input.reshape((1, n_steps, n_features))
            #yhat = 0
            #for j in range(0,10):
               #yhat = yhat + model.predict(x_input, verbose=0)
            yhat = model.predict(x_input, verbose=0)
            #print(yhat/10)
            response = {}
            response["list"] = yhat.tolist()
            response["mae"] = 0
            return response

        def stackedLSTMdeaths(deaths):
            keras.optimizers.Adam(lr=0.01)

            raw_seq = []
            deaths = deaths[6:]

            for i in range(0, len(deaths)):
                raw_seq.append(deaths[i][1])

            print(raw_seq)
            n_steps = 3
            n_features = 1
            X, y = lstmDAO.split_sequence(raw_seq, n_steps)
            X = X.reshape((X.shape[0], X.shape[1], n_features))
            model = Sequential()
            model.add(LSTM(50, activation='relu', return_sequences=True, input_shape=(n_steps, n_features)))
            model.add(LSTM(50, activation='relu'))
            model.add(Dense(1))
            model.compile(optimizer='adam', loss='mse')
            # fit model
            model.fit(X, y, epochs=200, verbose=0)
            # demonstrate prediction
            x_input = array([raw_seq[-3], raw_seq[-2], raw_seq[-1]])
            x_input = x_input.reshape((1, n_steps, n_features))
            #yhat = 0
            #for j in range(0,10):
               #yhat =yhat + model.predict(x_input, verbose=0)
            yhat= model.predict(x_input, verbose=0)
            print(yhat)
            response = {}
            response["list"] = yhat.tolist()
            response["mae"] = 0
            return response


        def bidirectionalLSTMdeaths(deaths):

            keras.optimizers.Adam(lr=0.01)
            raw_seq = []
            deaths = deaths[6:]

            for i in range(0, len(deaths)):
                raw_seq.append(deaths[i][1])

            print(raw_seq)

            n_steps = 3
            n_features = 1
            X, y = lstmDAO.split_sequence(raw_seq, n_steps)
            X = X.reshape((X.shape[0], X.shape[1], n_features))
            model = Sequential()
            model.add(Bidirectional(LSTM(50, activation='relu'), input_shape=(n_steps, n_features)))
            model.add(Dense(1))
            model.compile(optimizer='adam', loss='mse')
            # fit model
            model.fit(X, y, epochs=200, verbose=0)
            # demonstrate prediction
            x_input = array([raw_seq[-3], raw_seq[-2], raw_seq[-1]])
            x_input = x_input.reshape((1, n_steps, n_features))
            yhat = 0
            #for j in range(0, 10):
                #yhat =yhat +  model.predict(x_input, verbose=0)
            #print(yhat/10)
            yhat = model.predict(x_input, verbose=0)
            response = {}
            response["list"] = yhat.tolist()
            response["mae"] = 0
            return response


        def cnnLSTMdeaths(deaths):

            keras.optimizers.Adam(lr=0.01)
            raw_seq = []
            deaths = deaths[6:]

            for i in range(0, len(deaths)):
                raw_seq.append(deaths[i][1])

            print(raw_seq)

            # define model
            n_steps = 4
            # split into samples
            X, y = lstmDAO.split_sequence(raw_seq, n_steps)

            # reshape from [samples, timesteps] into [samples, subsequences, timesteps, features]
            n_features = 1

            n_seq = 2
            n_steps = 2
            X = X.reshape((X.shape[0], n_seq, n_steps, n_features))
            model = Sequential()
            model.add(TimeDistributed(Conv1D(filters=64, kernel_size=1, activation='relu'), input_shape=(None, n_steps, n_features)))
            model.add(TimeDistributed(MaxPooling1D(pool_size=2)))
            model.add(TimeDistributed(Flatten()))
            model.add(LSTM(50, activation='relu'))
            model.add(Dense(1))
            model.compile(optimizer='adam', loss='mse')
            # fit model
            model.fit(X, y, epochs=500, verbose=0)
            # demonstrate prediction
            x_input = array([raw_seq[-4],raw_seq[-3], raw_seq[-2], raw_seq[-1]])
            x_input = x_input.reshape((1, n_seq, n_steps, n_features))
            yhat = 0
            #for j in range(0, 10):
               #yhat = yhat +  model.predict(x_input, verbose=0)
            #print(yhat/10)
            yhat = model.predict(x_input, verbose=0)
            response = {}
            response["list"] = yhat.tolist()
            response["mae"] = 0
            return response


        def convLSTMdeaths(deaths):

            keras.optimizers.Adam(lr=0.01)
            raw_seq = []
            deaths = deaths[6:]

            for i in range(0, len(deaths)):
                raw_seq.append(deaths[i][1])

            print(raw_seq)


            n_steps = 4
            # split into samples
            X, y = lstmDAO.split_sequence(raw_seq, n_steps)
            # reshape from [samples, timesteps] into [samples, timesteps, rows, columns, features]
            n_features = 1
            n_seq = 2
            n_steps = 2
            X = X.reshape((X.shape[0], n_seq, 1, n_steps, n_features))
            # define model
            model = Sequential()
            model.add(ConvLSTM2D(filters=64, kernel_size=(1,2), activation='relu', input_shape=(n_seq, 1, n_steps, n_features)))
            model.add(Flatten())
            model.add(Dense(1))
            model.compile(optimizer='adam', loss='mse')
            # fit model
            model.fit(X, y, epochs=500, verbose=0)
            # demonstrate prediction
            x_input = array([raw_seq[-4],raw_seq[-3], raw_seq[-2], raw_seq[-1]])
            x_input = x_input.reshape((1, n_seq, 1, n_steps, n_features))
            yhat = model.predict(x_input, verbose=0)
            response = {}
            response["list"] = yhat.tolist()
            response["mae"] = 0
            return response




        def vectoroutputLSTMdeaths(deaths):


            keras.optimizers.Adam(lr=0.01)
            raw_seq = []
            deaths = deaths[6:]

            for i in range(0, len(deaths)):
                raw_seq.append(deaths[i][1])

            print(raw_seq)

            #Vector Output Model
            n_steps_in, n_steps_out = 3, 3
            # split into samples
            X, y = lstmDAO.split_sequenceMS(raw_seq, n_steps_in, n_steps_out)
            # reshape from [samples, timesteps] into [samples, timesteps, features]
            n_features = 1
            X = X.reshape((X.shape[0], X.shape[1], n_features))
            # define model
            model = Sequential()
            model.add(LSTM(100, activation='relu', return_sequences=True, input_shape=(n_steps_in, n_features)))
            model.add(LSTM(100, activation='relu'))
            model.add(Dense(n_steps_out))
            model.compile(optimizer='adam', loss='mse')
            # fit model
            model.fit(X, y, epochs=50, verbose=0)
            # demonstrate prediction
            x_input = array([raw_seq[-3], raw_seq[-2], raw_seq[-1]])
            x_input = x_input.reshape((1, n_steps_in, n_features))

            yhat = model.predict(x_input, verbose=0)
            response = {}
            response["list"] = yhat.tolist()
            response["mae"] = 0
            return response


        def encodedLSTMdeaths(deaths):

            #Encoded
            raw_seq = []
            deaths = deaths[6:]

            for i in range(0, len(deaths)):
                raw_seq.append(deaths[i][1])

            print(raw_seq)

            keras.optimizers.Adam(lr=0.01)
            # choose a number of time steps
            n_steps_in, n_steps_out = 3, 3
            # split into samples
            X, y = lstmDAO.split_sequenceMS(raw_seq, n_steps_in, n_steps_out)
            # reshape from [samples, timesteps] into [samples, timesteps, features]
            n_features = 1
            X = X.reshape((X.shape[0], X.shape[1], n_features))
            y = y.reshape((y.shape[0], y.shape[1], n_features))
            # define model
            model = Sequential()
            model.add(LSTM(100, activation='relu', input_shape=(n_steps_in, n_features)))
            model.add(RepeatVector(n_steps_out))
            model.add(LSTM(100, activation='relu', return_sequences=True))
            model.add(TimeDistributed(Dense(1)))
            model.compile(optimizer='adam', loss='mse')
            # fit model
            model.fit(X, y, epochs=100, verbose=0)
            # demonstrate prediction
            x_input = array([raw_seq[-3], raw_seq[-2], raw_seq[-1]])
            x_input = x_input.reshape((1, n_steps_in, n_features))
            yhat = model.predict(x_input, verbose=0)
            response = {}
            response["list"] = yhat.tolist()
            response["mae"] = 0
            return response