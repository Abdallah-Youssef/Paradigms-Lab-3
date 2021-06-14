//
// Created by Abdallah on 14-Jun-21.
//

#ifndef CLION_C___OVALSHAPED_H
#define CLION_C___OVALSHAPED_H
#include <string>
#include "OvalShaped.h"
class OvalShaped : public Fruit{
protected:
    int ovality = 0;
public:
    OvalShaped(int w): Fruit(w){};
    OvalShaped(int w, int o): Fruit(w), ovality(o){};
    virtual std::string getOvality() = 0;
};


#endif //CLION_C___OVALSHAPED_H
