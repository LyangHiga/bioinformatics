# TODO: use some js library
# TODO: improve axis scale
import pandas as pd
import matplotlib.pyplot as plt


def plotData(x, y):
    plt.scatter(x, y,  s=1)
    plt.xlabel('Position')
    plt.ylabel('Skew')


def plotSkewDiagram(name):
    y = pd.read_csv(name+'.txt', header=None)
    x = list(range(0, y.size))
    plotData(x, y)
    plt.show()


plotSkewDiagram("skew_extra_dataset")
