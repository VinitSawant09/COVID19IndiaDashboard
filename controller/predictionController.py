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

    def predictProphet (cumulativeList):
         response = ''
         print("inside predictProphet Controller")
         response = predictiondao.predictProphet(cumulativeList)

         return response