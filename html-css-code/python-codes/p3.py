def fact(n):
    if (n==0):
        return 1
    else:
        return n*fact(n-1)
    
n=int(input("enter the value of n: "))
r=int(input("enter the value of r( R cannot be negative): "))
print(f"{n}C{r}={int(fact(n)/(fact(n-r)*fact(r)))}")