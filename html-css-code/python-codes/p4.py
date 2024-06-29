num=(input("Enter the number: "))
print("The entered number is ",num)
uniqdig=set(num)
for i in uniqdig:
    print(i,"Occurs",num.count(i),"times")