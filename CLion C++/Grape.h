//
// Created by Abdallah on 14-Jun-21.
//

#ifndef CLION_C___GRAPE_H
#define CLION_C___GRAPE_H

#include "TinyFruit.h"

class Grape: virtual public TinyFruit {
protected:
    std::string color = "berry_default_color";
public:

    Grape(int w, int t, std::string color):
    TinyFruit(w, t),
    color(color)
    {};

    std::string toString() override{ return "Grape : " + std::to_string(weight) + ", " + color; }

    std::string getTininess() override{ return "Grape tininess : " + std::to_string(tininess); }

    virtual std::string getColor(){
        return "Grape color : " + color;
    }
    FruitType getType() override{
        return FruitType::GRAPE;
    }
};


#endif //CLION_C___GRAPE_H
