import requests, bs4, json, os, sys
import http.client
import csv

http.client.HTTPConnection._http_vsn = 10
http.client.HTTPConnection._http_vsn_str = 'HTTP/1.0'


url = 'https://services9.arcgis.com/N9p5hsImWXAccRNI/arcgis/rest/services/Nc2JKvYFoAEOFCG5JSI6/FeatureServer/3/query?f=json&where=Confirmed%3C%3E0&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Confirmed%20desc&outSR=102100&resultOffset=0&resultRecordCount=1000&cacheHint=true'

response = requests.get(url, 
                   headers={
                       'Accept':'*/*',
                       'Accept-Encoding':'gzip,deflate,br',
                       'Accept-language':'en-US,en;q=0.5',
                       'Connection':'keep-alive',
                       'Host':'services9.arcgis.com',
                       'Origin':'https://www.arcgis.com',
                       'Referer': 'https://www.arcgis.com/apps/opsdashboard/index.html',
                       'TE': 'Trailers'
                       })

#print(response.content)

dataFile = open('E:\Learning\Jupyter\covid19\data_file.csv','w')
csv_writer = csv.writer(dataFile)
count=0
for each in response.json()['features']:
    for i in each.values():
        if count == 0:
            header = i.keys()
            csv_writer.writerow(header)
            count+=1
        csv_writer.writerow(i.values())

dataFile.close()