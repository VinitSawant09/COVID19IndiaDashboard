import pandas as pd
import openpyxl
import xlsxwriter
import math
from datetime import date, timedelta
#   Reading and Displaying the data frame imported from the Excel Sheet
df = pd.read_csv(r"C:\Users\Mypc\Desktop\Thesis\datasets_549966_1224804_complete.csv")

print(len(df))
prevConf = {}
prevRec = {}
prevDeaths = {}
mortalityRate = {}
recoveryRate = {}
timeSeriesConf = {}

def checkKey(dict, key):
    if key in dict.keys():
        return 1
    else:
        return 0

sdate = date(2020, 1, 31)   # start date
edate = date(2020, 6, 8)   # end date

delta = edate - sdate       # as timedelta
count = 0
listT = []
for i in range(delta.days + 1):
    day = sdate + timedelta(days=i)
    #print(day)
    count = count+1
    print(count)
    listT.append(0)


confirmedCases = []
sum = 0
count = 0
for i in df.itertuples():
    tempC = 0
    tempR = 0
    tempD = 0
    if checkKey(prevConf, i[2]) != 1:
        prevConf[i[2]] = 0
        prevRec[i[2]] = 0
        prevDeaths[i[2]] = 0
        timeSeriesConf[i[2]]= listT

    if prevConf[i[2]] != i[5]:
        tempC = math.fabs(i[5]-prevConf[i[2]])
        prevConf[i[2]] = i[5]


    if prevRec[i[2]] != i[7]:
        tempR = math.fabs(i[7]-prevRec[i[2]])
        prevRec[i[2]] = i[7]

    if prevDeaths[i[2]] != i[6]:
        tempD = math.fabs(i[6] - prevDeaths[i[2]])
        prevDeaths[i[2]] = i[6]

    confirmedCases.append([i[0], i[2], i[1], tempC, tempD, tempR])

#print(confirmedCases)
print(prevConf)
#print(prevRec)
#print(prevDeaths)

for state in prevConf:
    mortalityR = (prevDeaths[state]*100) / prevConf[state]
    recoveryR = (prevRec[state]*100) / prevConf[state]
    mortalityRate[state] = mortalityR
    recoveryRate[state] = recoveryR
#print(mortalityRate)
#print(recoveryRate)
# Calling DataFrame constructor on list
#df = pd.DataFrame(confirmedCases,columns =['Id', 'State', 'Date', 'ConfirmedCases', 'Deaths', 'Recovery'])
#print(df)
#df.to_excel(r"C:\Users\Mypc\Desktop\finalFact.xlsx")


print(timeSeriesConf)