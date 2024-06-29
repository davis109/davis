from datetime import date
perName = input("Enter the name of the person : ")
perDOB = int(input("Enter his year of birth : "))
curYear = date.today().year
perAge = curYear - perDOB
if (perAge > 60):
    print(perName, "aged", perAge, "years is a Senior Citizen.") 
else:
	print(perName, "aged", perAge, "years is not a Senior Citizen.")