//
// Created by Abdallah on 14-Jun-21.
//

#ifndef CLION_C___FRUIT_H
#define CLION_C___FRUIT_H

#include <string>

class Fruit {
public:
    enum FruitType{APPLE, AVOCADO, GRAPE, BERRY, GRAPPLE, ABSTRACT};
    FruitType fruitType;
public:
    int weight = 0;
    Fruit(int w) : weight(w){};
    virtual std::string toString() = 0;
    virtual FruitType getType() = 0;
};


#endif //CLION_C___FRUIT_H
