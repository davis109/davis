from math import sqrt

mylist=[]
num=int(input("ENter the number of elements in the list: "))
for i in range(num):
    val=int(input("Enter the number: "))
    mylist.append(val)

print(f"List= {mylist}")
print(f"The length of the list= {len(mylist)}")

total=0
for i in mylist:
    total=total+i

mean=total/num
total=0

for i in mylist:
    total=total+((i-mean)*(i-mean))

variance=total/num
stdvariance=sqrt(variance)

print(f"Mean= {mean}")
print(f"Variance= {variance}")
print("Standard variance","%0.2f"%stdvariance)