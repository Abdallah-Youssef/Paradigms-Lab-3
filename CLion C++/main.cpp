#include <iostream>
#include "BST.h"
#include "OvalShaped.h"
#include "TinyFruit.h"

#include "Berry.h"
#include "Grape.h"
#include "Avocado.h"
#include "Apple.h"
#include "Grapple.h"




int main() {
    /*Grapple* g = new Grapple(10, 10, 50, "red apple", "blue grape");
    std::cout << g -> toString() << std::endl;
    std::cout << g -> getTininess() << std::endl;
    std::cout << g -> getOvality() << std::endl;
    std::cout << g -> getColor() << std::endl;*/

    /*std::cout << "Hello, World!" << std::endl;
    Fruit* f = new Fruit(10);
    std::cout << f->weight << std::endl;

    Node* node = new Node(f);
    Node* inserted = new Node(new Fruit(100));
*/

    BST *tree = new BST();

    Apple* apple = new Apple(10,10,"red");
    Avocado* avocado = new Avocado(20, 20);

    Grape* grape = new Grape(69,30,"blue");
    Berry* berry = new Berry(40,40);
    Grapple* grapple = new Grapple(50, 50, 50, "black","purple");


    tree -> insert(new Node(apple));
    tree -> insert(new Node(grape));
    tree -> insert(new Node(berry));
    tree -> insert(new Node(avocado));
    tree -> insert(new Node((Apple*)grapple));

    tree -> iterate();
    std::cout << "----" << std::endl;

    tree -> magnifyByType(Fruit::FruitType::AVOCADO, 100);

    tree -> iterate();
    std::cout << "----" << std::endl;


    std::cout << tree->findLightest()->toString() << "\n" << tree->findHeaviest()->toString() <<"\n";
    std::cout << "----" << std::endl;

    printNodes(tree->filterByWeight(50));
    std::cout << "----" << std::endl;

    printNodes(tree->filterByType(Fruit::FruitType::AVOCADO));
    std::cout << "----" << std::endl;
    return 0;
}
