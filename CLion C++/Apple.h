//
// Created by Abdallah on 14-Jun-21.
//

#ifndef CLION_C___APPLE_H
#define CLION_C___APPLE_H

#include "OvalShaped.h"
class Apple : virtual public OvalShaped{
protected:
    std::string color = "apple_default_color";
public:

    Apple(int w, int ovality, std::string color):
    OvalShaped(w, ovality),
    color(color)
    {};

    std::string toString() override{ return "Apple : " + std::to_string(weight) + ", " + color; }

    std::string getOvality() override{ return "Apple ovality " + std::to_string(ovality); }

    virtual std::string getColor(){
        return "Apple color : " + color;
    }

    FruitType getType() override{
        return FruitType::APPLE;
    }
};


#endif //CLION_C___APPLE_H
