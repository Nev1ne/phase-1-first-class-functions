//callback is an argument
//call the callback above
//return the callback

const receivesAFunction = callback => callback()

//Takes no arguments
//returns ANamedFunction

const returnsANamedFunction = () =>{
    return function named(){

    }
}

//Takes no arguments and returns an anonymous function
const returnsAnAnonymousFunction = () => ()=> {

}