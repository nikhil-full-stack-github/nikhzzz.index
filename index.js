const EnterString = () => {

    let input = prompt("hello");
    
     for(let i = 0; i < input.length; i++){
            
     let uppercase = input.toUpperCase();

     document.write(`${i}${uppercase[i]}`);

    }
        
    
}


EnterString();
