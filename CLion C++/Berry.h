//
// Created by Abdallah on 14-Jun-21.
//

#ifndef CLION_C___BERRY_H
#define CLION_C___BERRY_H


#include "TinyFruit.h"
#include <string>

class Berry : public TinyFruit{
public:

    Berry(int w, int t):
    TinyFruit(w, t)
    {};

    std::string toString() override{
        return "Berry : " + std::to_string(weight);
    }

    std::string getTininess() override{
        return "Berry tininess : " + std::to_string(tininess);
    }

    FruitType getType() override{
        return FruitType::BERRY;
    }
};


#endif //CLION_C___BERRY_H
