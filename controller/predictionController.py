from dao.predictionDAO import predictionDAO as predictiondao

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