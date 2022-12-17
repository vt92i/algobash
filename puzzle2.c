#include <limits.h>
#include <math.h>
#include <stdio.h>

struct child {
    int gender, weight;
};

int find_minimum(struct child c[], int length) {
    int result = INT_MAX;

    for (int i = 0; i < length; i++) {
        if (c[i].gender == 0)
            for (int j = 0; j < length; j++)
                if (c[j].gender == 1)
                    result = abs(c[i].weight - c[j].weight) < result ? abs(c[i].weight - c[j].weight) : result;
    }

    return result;
}

int main(void) {
    struct child c[] = {
        {0, 1},
        {0, 13},
        {1, 9},
        {0, 7},
        {1, 15}};

    printf("Output: %d \n", find_minimum(c, sizeof(c) / sizeof(c[0])));
    return 0;
}
