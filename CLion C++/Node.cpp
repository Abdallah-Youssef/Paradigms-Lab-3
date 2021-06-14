//
// Created by Abdallah on 14-Jun-21.
//

#include "Node.h"


int Node::compare(Node *otherNode) {
    return fruit->weight - otherNode->fruit->weight;
}


void Node::insert(Node * otherNode) {
    if (compare(otherNode) >= 0){
        // this is heavier than otherNode
        if (left == nullptr)
            left = otherNode;
        else left -> insert(otherNode);
    }else{
        // this is lighter than otherNode
        if (right == nullptr)
            right = otherNode;
        else right -> insert(otherNode);
    };
}


