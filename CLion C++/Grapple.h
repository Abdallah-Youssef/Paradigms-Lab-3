//
// Created by Abdallah on 14-Jun-21.
//

#ifndef CLION_C___GRAPPLE_H
#define CLION_C___GRAPPLE_H

#include <utility>

#include "Apple.h"
#include "Grape.h"

/// Grapple has weight, ovality, and tininess
class Grapple: public Apple, public Grape {
public:


    // weight, ovality, tininess, colors constructor
    Grapple(int w, int o, int t, std::string apple_color, std::string grape_color):
            Apple(w,o, std::move(apple_color)),
            Grape(w,t, std::move(grape_color)),
            OvalShaped(w,o),
            TinyFruit(w, t)
            {};

    std::string toString() override{
        return "Grapple, w:" + std::to_string(Apple::weight) + // could alternatively be Grape::weight
        ", o: " + std::to_string(OvalShaped::ovality) +
        ", t: " + std::to_string(TinyFruit::tininess) +
        ", color : (" + Apple::color + ", " + Grape::color + ")";
    }
    std::string getColor() override {
        return Apple::getColor() + " apple, but " + Grape::getColor() + " grape";
    }
    FruitType getType() override{
        return FruitType::GRAPPLE;
    }
};


#endif //CLION_C___GRAPPLE_H
