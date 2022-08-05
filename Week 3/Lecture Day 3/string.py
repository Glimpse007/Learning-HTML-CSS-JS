
s = "Glimpse Aryan XYZ Nikunj"

st = 0
arr = []
dicts = {1:2,2:4,3:6}

for i in range(1, len(s)):
    if s[i] == " ":
        arr.append(s[st:i])
        st = i + 1


print(dicts[2])
