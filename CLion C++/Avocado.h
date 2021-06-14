//
// Created by Abdallah on 14-Jun-21.
//

#ifndef CLION_C___AVOCADO_H
#define CLION_C___AVOCADO_H

#include "Fruit.h"
#include "OvalShaped.h"
#include <string>

class Avocado : public OvalShaped{
public:

    Avocado(int w, int ovality):
    OvalShaped(w, ovality){};

    std::string toString() override{
        return "Avocado : " + std::to_string(weight);
    }

    std::string getOvality() override{
        return "Avocado ovality : " + std::to_string(ovality);
    }

    FruitType getType() override {
        return FruitType::AVOCADO;
    }
};


#endif //CLION_C___AVOCADO_H
