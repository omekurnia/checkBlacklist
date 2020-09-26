def initialize(blacklist):
    if blacklist == "blocked.txt":
        with open("blocked.txt", "r") as file:
            blist = file.read()
            return blist

def check_blacklist(name, phone_number):
    blist = initialize(blacklist)
    prompt = name.lower() + " " + str(phone_number)
    if prompt in blist.lower():
        blacklisted = True
        print("It is on blacklist")
    else:
        blacklisted = False
        print("not in blacklist")
    return blacklisted

while True:
    blacklist = input("please input your file name: ")
    if blacklist == "blocked.txt":
        name = input("Please input the name: ")
        phone_number = int(input("please input the phone number: "))
        check_blacklist(name, phone_number)
        break
    print("sorry couldn't find your file name, check again.")