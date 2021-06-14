//
// Created by Abdallah on 14-Jun-21.
//

#ifndef CLION_C___TINYFRUIT_H
#define CLION_C___TINYFRUIT_H


#include "Fruit.h"

class TinyFruit: public Fruit {
protected:
    int tininess = 0;
public:
    TinyFruit(int w) : Fruit(w){};
    TinyFruit(int w, int t) : Fruit(w), tininess(t){};
    virtual std::string getTininess() = 0;
};


#endif //CLION_C___TINYFRUIT_H
