# include <iostream>
using namespace std;

int main() {
    char operation;
    float num1,num2;

    cout<<"Enter the operation you want to perform ( +, - , * , / ): ";
    cin>>operation;
    
    cout<<"Enter number1: ";
    cin>>num1;
    
    cout<<"Enter number2: ";
    cin>>num2;
    
    switch(operation) {
        case '+':
        cout<<"The addition is: ";
        cout << num1 << " + " << num2 << " = " << (num1 + num2);
        break;

        case '-':
        cout<<"The subtraction is: ";
        cout << num1 << " - " << num2 << " = " << num1 - num2;
        break;

        case '*':
        cout<<"The multiplication is: ";
        cout << num1 << " * " << num2 << " = " << num1 * num2;
        break;
        
        case '/':
        cout<<"The division is: ";
        cout << num1 << " / " << num2 << " = " << num1 / num2;
        break;
        
        default:
        cout<<"Please enter a valid operation: ";
        break;
  }

  return 0;
}