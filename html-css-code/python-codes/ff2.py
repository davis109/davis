def Fib(n):
    a=0
    b=1

    if n==1:
        print(a)
    else:
        print(a)
        print(b)
        for i in range(2,n):
            c=a+b
            print(c)
            a=b
            b=c

num=int(input("Enter number: "))
Fib(num)