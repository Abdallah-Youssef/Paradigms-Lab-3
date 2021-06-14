//
// Created by Abdallah on 14-Jun-21.
//

#include <iostream>
#include "BST.h"
void printNodes(Nodes nodes){
    std::cout << "~~~~~~~~~~~~~~~~~~~~~~~~~~\nNodes : " << std::endl;
    for (Node* node : nodes){
        std::cout << node->toString() << std::endl;
    }
    std::cout << "~~~~~~~~~~~~~~~~~~~~~~~~~~" << std::endl;

}
void BST::insert(Node * node) {
    if (root == nullptr)
        root = node;
    else root -> insert(node);
}


Nodes BST::traversal(Node* node) {
    if (node == nullptr)
        return {};

    Nodes left = traversal(node -> left);
    Nodes right = traversal(node -> right);

    left.push_back(node);
    left.insert(left.end(), right.begin(), right.end());
    return left;
}

Nodes BST::traversal() {
    return traversal(root);
}

void BST::iterate() {
    Nodes nodes =  traversal();
    for (Node* node : nodes){
        std::cout << node->toString() << std::endl;
    }
}

Nodes BST::filterByWeight(int w) {
    Nodes nodes =  traversal();
    Nodes filtered;
    for (Node* node : nodes){
        if (node ->fruit->weight >= w)
            filtered.push_back(node);
    }

    return filtered;
}

void BST::magnifyByType(Fruit::FruitType type, int weight) {
    Nodes nodes = traversal();
    for (Node* node : nodes){
        if (node->fruit->getType() == type)
            node->fruit->weight += weight;
    }
}

Node* BST::findHeaviest(){
    Node* u = root;
    while (u != nullptr){
        if (u -> right != nullptr)
            return u;
        u = u -> right;
    }
    return nullptr;
}
Node* BST::findLightest() {}(){
    Node* u = root;
    while (u != nullptr){
        if (u -> left != nullptr)
            return u;
        u = u -> left;
    }
    return nullptr;
}



