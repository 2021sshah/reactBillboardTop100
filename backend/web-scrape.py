# include relevant packages and libraries
import requests
from bs4 import BeautifulSoup
import sys
import pandas as pd 

def scrapeWeb(ranks, titles, artists):
    # perfrom get(url) request and initalize soup
    URL = "https://www.billboard.com/charts/hot-100"
    response = requests.get(URL)
    soup = BeautifulSoup(response.text, "html.parser")
    # parse HTML for relevant information
    r = 1
    for rankEntry in soup.findAll('li', class_="chart-list__element"):
        tl = rankEntry.find('span', class_="chart-element__information__song").text
        art = rankEntry.find('span', class_="chart-element__information__artist").text
        # save song data to list structures
        ranks.append(r)
        titles.append(tl)
        artists.append(art)
        r+=1
    # exit function
    return

def printInfo(ranks, titles, artists):
    # iterate through lists and store data in buffer
    for idx in range(len(titles)):
        print(ranks[idx])
        print(titles[idx])
        print(artists[idx])
    # send buffer data to index.js and exit function
    sys.stdout.flush()
    return

def exportInfo(ranks, titles, artists):
    # output song information to .csv file
    filename = 'songs.csv'
    df = pd.DataFrame({'rank': ranks, 'title': titles, 'artist': artists}) 
    df.to_csv(filename, index=False, encoding='utf-8')
    # exit function
    return

# Lists to store song rankings, titles, and artists
ranks = []
titles = []
artists = []
# Call web-scraping and export functions
scrapeWeb(ranks, titles, artists)
printInfo(ranks, titles, artists)
#exportInfo(ranks, titles, artists)