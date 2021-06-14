//
// Created by Abdallah on 14-Jun-21.
//
#include <vector>
#include "Fruit.h"

#ifndef CLION_C___NODE_H
#define CLION_C___NODE_H

class Node {

private:
    Node* right = nullptr;
    Node* parent = nullptr;
    Node* left = nullptr;
    Fruit* fruit = nullptr;
    friend class BST;

    void insert(Node *);


public:
    Node() = default;
    explicit Node(Fruit *fruit) : fruit(fruit) {}
    std::string toString(){ return fruit -> toString();}

    /**
     * return value:
     *  1 if this is heavier than otherNode
     *  0 if same weight
     *  -1 if this is lighter than otherNode
     */
    int compare (Node* ); // returns this.fruit.weight - otherNode.fruit.weight



};

#endif //CLION_C___NODE_H
