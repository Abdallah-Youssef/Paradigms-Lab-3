//
// Created by Abdallah on 14-Jun-21.
//

#ifndef C___BST_H
#define C___BST_H


#include <vector>
#include <memory>
#include "Node.h"
using Nodes = std::vector<Node*>;
void printNodes(Nodes);
class BST {
private:
    Node* root = nullptr;
    Nodes traversal(Node *node);
    Nodes traversal();
public:
    explicit BST(Node* new_root): root(new_root){};
    BST() = default; // default constructor

    void insert(Node *);
    void iterate();
    Nodes filterByWeight(int);

    void magnifyByType(Fruit::FruitType type, int weight);
    Node* findHeaviest();
    Node* findLightest();

};


#endif //C___BST_H
