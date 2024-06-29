class Student:

    def __init__(self,name="",usn="",score=[0,0,0,0]):
        self.name=name
        self.usn=usn
        self.score=score

    def getmarks(self):
        self.name=input("Enter your name: ")
        self.usn=input("Enter your usn: ")
        self.score[0]=int(input("Enter the score of subject1: "))
        self.score[1]=int(input("Enter the score of subject2: "))
        self.score[2]=int(input("Enter the score of subject3: "))
        self.score[3]=self.score[0]+self.score[1]+self.score[2]

    def display(self):
        percentage=self.score[3]/3
        print("SCORE CARD DETAILS")
        print(f"NAME   USN   MARKS1   MARKS2   MARKS 3   TOTAL   PERCENT")
        print(f"{self.name}   {self.usn}   {self.score[0]}   {self.score[1]}   {self.score[2]}   {self.score[3]}   {percentage}")

def main():
    s1=Student()
    s1.getmarks()
    s1.display()

main()
