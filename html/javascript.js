const numbers = [
                    {name: "one", quantity: 1}, 
                    {name: "two", quantity: 2}, 
                    {name: "three", quantity: 3}, 
                    {name: "four", quantity: 4}, 
                ];




const [number1, ...rest] =  numbers;

document.write(number1.name + " "+ rest.forEach(e => e.name)) 