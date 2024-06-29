stName = input("Enter the name of the student: ")
stUSN = input("Enter the USN of the student: ") 
stMarks1 = int(input("Enter marks in Subject 1: "))
stMarks2 = int(input ("Enter marks in Subject 2: "))
stMarks3 = int(input("Enter marks in Subject 3: "))


print ("Student Details\n=========================")
print ("Name:", stName)
print("USN:", stUSN)
print ("Marks 1:", stMarks1)
print("Marks 2:", stMarks2)
print("Marks 3:", stMarks3)
print("Total:", stMarks1+stMarks2+stMarks3)
print("Percent:", "%.2f"%((stMarks1+stMarks2+stMarks3)/3))  
                                                           #%.2f round up to two decimal values
print("=========================")
