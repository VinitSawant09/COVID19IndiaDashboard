from dao.predictionDAO import predictionDAO as predictiondao

class predictionController:

    def predictLR (cumulativeList):
         response = ''
         print("inside predictLR Controller")
         response = predictiondao.predictLR(cumulativeList)

         return response

    def predictLSTM (cumulativeList):
         response = ''
         print("inside predictLSTM Controller")
         response = predictiondao.predictLSTM(cumulativeList)

         return response

    def predictProphetDeaths (cumulativeList):
         response = ''
         print("inside predictProphetDeaths Controller")
         response = predictiondao.predictProphetDeaths(cumulativeList)

         return response

    def predictProphetConfirmed(cumulativeList):
        response = ''
        print("inside predictProphetConfirmed Controller")
        response = predictiondao.predictProphetConfirmed(cumulativeList)

        return response

    def predictProphetRecovered(cumulativeList):
        response = ''
        print("inside predictProphetRecovered Controller")
        response = predictiondao.predictProphetRecovered(cumulativeList)

        return response

    def predictProphetDeathsLog(cumulativeList):
        response = ''
        print("inside predictProphetDeathsLog Controller")
        response = predictiondao.predictProphetDeathsLog(cumulativeList)

        return response