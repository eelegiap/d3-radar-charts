# d3-radar-charts
Code to create the spider/radar charts based on case distributions from the Russian National Corpus.

You can locally serve this repository to see the radar charts, and the code that parses the RNC is inside the radar-chart-code folder. Currently, the word to plot pipeline is not streamlined -- I write the JSON object from the .ipynb notebook to the data folder.

Usage:
$ python -m http.server
