# Load packs
library(dplyr)

# Loadind dataset
#setwd("C:/Users/templ_000/Dropbox/Udacity/Analista de Dados/Projeto6/data")
setwd("/home/enadciber/Dropbox/Udacity/Analista de Dados/Projeto6/data")

ds <- read.csv("prosperLoanData.csv")
us_pop <- read.csv("USPopulation_by_state.csv")

#Group the data
ds_subset <- ds %>% 
  group_by(BorrowerState, LoanStatus) %>%
  summarise(Freq = n())
ds_subset

#dont load this package before!
library(plyr)
Borrowers_per_State = count(ds, "BorrowerState")
Borrowers_per_State$pop = us_pop$pop

ds_subset1 = ds_subset[ds_subset$LoanStatus == "Chargedoff", ]
ds_subset2 = ds_subset[ds_subset$LoanStatus == "Defaulted", ]

Bad_custmers = merge(ds_subset1, ds_subset2,  by = "BorrowerState")[,-c(2,4)]
Bad_custmers$freq = (Bad_custmers$Freq.x + Bad_custmers$Freq.y)
Bad_custmers = Bad_custmers[,-c(2,3)]
Bad_custmers$total = Borrowers_per_State$freq

write.csv(Borrowers_per_State, file = "Borrowers_per_State.csv")
write.csv(Bad_custmers, file = "Bad_custmers.csv")
