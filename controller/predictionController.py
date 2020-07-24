from dao.predictionDAO import predictionDAO as predictiondao
from dao.arimaDAO import arimaDAO as arimaDAO
from dao.lstmDAO import lstmDAO as lstmDAO
class predictionController:

    def predictLR (cumulativeList):
         response = ''
         print("inside predictLR Controller")
         response = predictiondao.predictLR(cumulativeList)

         return response

    def predictProphetDeaths (cumulativeList,predDays):
         response = ''
         print("inside predictProphetDeaths Controller")
         response = predictiondao.predictProphetDeaths(cumulativeList,predDays)

         return response

    def predictProphetConfirmed(cumulativeList,predDays):
        response = ''
        print("inside predictProphetConfirmed Controller")
        response = predictiondao.predictProphetConfirmed(cumulativeList,predDays)

        return response

    def predictProphetRecovered(cumulativeList,predDays):
        response = ''
        print("inside predictProphetRecovered Controller")
        response = predictiondao.predictProphetRecovered(cumulativeList,predDays)

        return response

    def predictProphetDeathsLog(cumulativeList,predDays):
        response = ''
        print("inside predictProphetDeathsLog Controller")
        response = predictiondao.predictProphetDeathsLog(cumulativeList,predDays)

        return response

    def predictProphetConfirmedLog(cumulativeList,predDays):
        response = ''
        print("inside predictProphetConfirmedLog Controller")
        response = predictiondao.predictProphetConfirmedLog(cumulativeList,predDays)

        return response

    def predictProphetRecoveredLog(cumulativeList,predDays):
        response = ''
        print("inside predictProphetRecoveredLog Controller")
        response = predictiondao.predictProphetRecoveredLog(cumulativeList,predDays)

        return response

    def predictArimaDeaths(cumulativeList,predDays):
        response = ''
        print("inside predictArimaDeaths Controller")
        response = arimaDAO.predictArimaDeaths(cumulativeList,predDays)

        return response

    def predictArimaConfirmed(cumulativeList,predDays):
        response = ''
        print("inside predictArimaConfirmed Controller")
        response = arimaDAO.predictArimaConfirmed(cumulativeList,predDays)

        return response

    def predictArimaRecovered(cumulativeList,predDays):
        response = ''
        print("inside predictArimaRecovered Controller")
        response = arimaDAO.predictArimaRecovered(cumulativeList,predDays)

        return response

    def predictVanillaLSTMdeaths(cumulativeList):
        response = ''
        print("inside predictVanillaLSTM Controller")
        response = lstmDAO.vanillaLSTMdeaths(cumulativeList)

        return response

    def predictStackedLSTMdeaths(cumulativeList):
        response = ''
        print("inside predictStackedLSTMdeaths Controller")
        response = lstmDAO.stackedLSTMdeaths(cumulativeList)

        return response

    def predictBidirectionalLSTMdeaths(cumulativeList):
        response = ''
        print("inside predictStackedLSTMdeaths Controller")
        response = lstmDAO.bidirectionalLSTMdeaths(cumulativeList)

        return response

    def predictCNNLSTMdeaths(cumulativeList):
        response = ''
        print("inside predictCNNLSTMdeaths Controller")
        response = lstmDAO.cnnLSTMdeaths(cumulativeList)

        return response

    def predictConvLSTMdeaths(cumulativeList):
        response = ''
        print("inside predictConvLSTMdeaths Controller")
        response = lstmDAO.convLSTMdeaths(cumulativeList)

        return response

    def predictVectorOLSTMdeaths(cumulativeList):
        response = ''
        print("inside predictVectorOLSTMdeaths Controller")
        response = lstmDAO.vectoroutputLSTMdeaths(cumulativeList)

        return response

    def predictEncodedLSTMdeaths(cumulativeList):
        response = ''
        print("inside predictEncodedLSTMdeaths Controller")
        response = lstmDAO.encodedLSTMdeaths(cumulativeList)

        return response





    def predictVanillaLSTMconfirmed(cumulativeList):
        response = ''
        print("inside predictVanillaLSTMconfirmed Controller")
        response = lstmDAO.vanillaLSTMconfirmed(cumulativeList)

        return response

    def predictStackedLSTMconfirmed(cumulativeList):
        response = ''
        print("inside predictStackedLSTMconfirmed Controller")
        response = lstmDAO.stackedLSTMconfirmed(cumulativeList)

        return response

    def predictBidirectionalLSTMconfirmed(cumulativeList):
        response = ''
        print("inside predictStackedLSTMconfirmeds Controller")
        response = lstmDAO.bidirectionalLSTMconfirmed(cumulativeList)

        return response

    def predictCNNLSTMconfirmed(cumulativeList):
        response = ''
        print("inside predictCNNLSTMconfirmed Controller")
        response = lstmDAO.cnnLSTMconfirmed(cumulativeList)

        return response

    def predictConvLSTMconfirmed(cumulativeList):
        response = ''
        print("inside predictConvLSTMconfirmed Controller")
        response = lstmDAO.convLSTMconfirmed(cumulativeList)

        return response

    def predictVectorOLSTMconfirmed(cumulativeList):
        response = ''
        print("inside predictVectorOLSTMconfirmed Controller")
        response = lstmDAO.vectoroutputLSTMconfirmed(cumulativeList)

        return response

    def predictEncodedLSTMconfirmed(cumulativeList):
        response = ''
        print("inside predictEncodedLSTMconfirmed Controller")
        response = lstmDAO.encodedLSTMconfirmed(cumulativeList)

        return response






    def predictVanillaLSTMrecovered(cumulativeList):
        response = ''
        print("inside predictVanillaLSTMrecovered Controller")
        response = lstmDAO.vanillaLSTMrecovered(cumulativeList)

        return response

    def predictStackedLSTMrecovered(cumulativeList):
        response = ''
        print("inside predictStackedLSTMrecovered Controller")
        response = lstmDAO.stackedLSTMrecovered(cumulativeList)

        return response

    def predictBidirectionalLSTMrecovered(cumulativeList):
        response = ''
        print("inside predictBidirectionalLSTMrecovered Controller")
        response = lstmDAO.bidirectionalLSTMrecovered(cumulativeList)

        return response

    def predictCNNLSTMrecovered(cumulativeList):
        response = ''
        print("inside predictCNNLSTMrecovered Controller")
        response = lstmDAO.cnnLSTMrecovered(cumulativeList)

        return response

    def predictConvLSTMrecovered(cumulativeList):
        response = ''
        print("inside predictConvLSTMrecovered Controller")
        response = lstmDAO.convLSTMrecovered(cumulativeList)

        return response

    def predictVectorOLSTMrecovered(cumulativeList):
        response = ''
        print("inside predictVectorOLSTMrecovered Controller")
        response = lstmDAO.vectoroutputLSTMrecovered(cumulativeList)

        return response

    def predictEncodedLSTMrecovered(cumulativeList):
        response = ''
        print("inside predictEncodedLSTMrecovered Controller")
        response = lstmDAO.encodedLSTMrecovered(cumulativeList)

        return response