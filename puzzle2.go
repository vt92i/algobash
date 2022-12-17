package main

import (
	"fmt"
	"math"
)

type Child struct {
	gender int
	weight int
}

func main() {
	var children []Child = []Child{
		{gender: 0, weight: 1},
		{gender: 0, weight: 13},
		{gender: 1, weight: 9},
		{gender: 0, weight: 7},
		{gender: 1, weight: 15},
	}

	fmt.Println("Output:", findMinimum(children))

}

func findMinimum(children []Child) int {
	var result int = math.MaxInt32
	for _, child1 := range children {
		if child1.gender == 0 {
			for _, child2 := range children {
				if child2.gender == 1 {
					if int(math.Abs(float64(child1.weight)-float64(child2.weight))) < result {
						result = int(math.Abs(float64(child1.weight) - float64(child2.weight)))
					}
				}
			}
		}
	}
	return result
}
