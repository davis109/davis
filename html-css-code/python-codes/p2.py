def Fibonnaci(n):
    a=0
    b=1
    if n==0:
        print(a)
    elif n==1:
        print(b)
    else:
        print(a,end=" ")
        print(b,end=" ")
        for i in range(2,n):


            c=a+b
            print(c,end=" ")
            a=b
            b=c

z=int(input("Enter the number of terms: "))
Fibonnaci(z)