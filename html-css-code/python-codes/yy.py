def fact(num):
 	if num == 0:
 		return 1
 	else:
                return num * fact(num-1)

n = int(input("Enter the value of N : "))
r = int(input("Enter the value of R (R cannot be negative or greater than N): "))
nCr = int(fact(n)/(fact(r)*fact(n-r)))
print(f"{n}C{r}={nCr}")