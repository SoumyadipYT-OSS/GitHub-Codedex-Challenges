def print_pattern():
    # Patterns for 'S' and 'M'
    s_pattern = ["SSSSS", "S    ", "SSSSS", "    S", "SSSSS"]
    m_pattern = ["M   M", "MM MM", "M M M", "M   M", "M   M"]

    # Print 'S' and 'M' side by side
    for s, m in zip(s_pattern, m_pattern):
        print(s + "   " + m)

print_pattern()