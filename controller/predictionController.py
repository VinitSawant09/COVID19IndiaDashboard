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

    def predictVanillaLSTM(cumulativeList):
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