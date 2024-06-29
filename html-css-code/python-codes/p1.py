from datetime import date
name=input("Enter you name: ")
rdate=int(input("Enter year of birth: "))
diffdate=date.today().year-rdate
if (diffdate>60):
    print(name,"aged",diffdate,"Senior Citizen")
else:
    print(name,"aged",diffdate,"Not a senior citizen")