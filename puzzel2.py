
def find_minimum(children):
    result = 10_000

    for child in children:
        if (child["gender"] == 0):
            for child2 in children:
                if (child2["gender"] == 1):
                    if (abs(child["weight"] - child2["weight"]) < result):
                        result = abs(child["weight"] - child2["weight"])

    return result


if __name__ == "__main__":
    children = [
        {
            "gender": 0,
            "weight": 1
        },
        {
            "gender": 0,
            "weight": 13
        },
        {
            "gender": 1,
            "weight": 9
        },
        {
            "gender": 0,
            "weight": 7
        },
        {
            "gender": 1,
            "weight": 15
        }
    ]

    print("Output:", find_minimum(children))
