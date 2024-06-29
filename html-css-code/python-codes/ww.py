import sys
def divExp(a,b):
    assert a>0,"a should be greater than 0"
    try:
        c=a/b
        
    except ZeroDivisionError:
        print("b cannot be 0")
    else:
        return c
    
x=int(input("ENter the first value: "))
y=int(input("Enter the second value: "))
z=divExp(x,y)
