import math
a=int(input("enter the number length: "))
lst=[]
for i in range(a):
    vsl=int(input("Enter the numbers: "))
    lst.append(vsl)

print(lst)

total=0
for e in lst:
    total=total+e

mean=total/a
total=0

for i in lst:
    total+=(i-mean)*(i-mean)

variance=total/a

stdvariance=math.sqrt(variance)

print(f"Mean: {mean}")
print(f"variance:{variance}")
print("STandarad deviation","%0.2f"%stdvariance)
