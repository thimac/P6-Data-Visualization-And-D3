# Packages
library(ggplot2)
library(gridExtra)
library(GGally)
library(plyr)

# Loadind dataset

setwd("C:/Users/templ_000/Dropbox/Udacity/Analista de Dados/Projeto6/data")

ds <- read.csv("prosperLoanData.csv")

# summarizing data
summary(ds["BorrowerState"])

write.csv(count(ds, "BorrowerState"), file = "BorrowerState.csv")

count(ds, "BorrowerState")
