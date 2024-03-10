def print_pattern(n):
    num = 1
    for i in range(n):
        for _ in range(n - i - 1):
            print(" ", end=" ")
        for _ in range(i + 1):
            print(num, end=" ")
            num += 1
        print()
print_pattern(4)