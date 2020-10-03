import React from 'react';

class Images extends React.Component{
    constructor(props){
        super(props)
        //console.log("Home ctor,props",props)
        this.flowers = [
            new Flower('Daffodil', 'daffodil.png'),
            new Flower('Cherry blossom', 'cherryblossom.png'),
            new Flower('Lily', 'lily.jpg'),
            new Flower('Daisy', 'daisy.jpg'),
            new Flower('Sunflower', 'sunflower.png'),
            new Flower('Tulip', 'tulip.png'),
            new Flower('Rose', 'rose.png'),
            new Flower('Water lily', 'waterlily.png'),
        ]
        
    

    }
    
    render(){
            const images = []
            for (let i = 0 ; i < this.flowers.length; i++)
            {
                images.push(<div>
                    {this.flowers[i].name}
                    <br/>
                    <img src={'imagequiz/image/'+this.flowers[i].picture}/>
                </div>)
            }
            return (
                <div>
                    Images Page
                    {images}
                </div>
            )
            
           /*
          return (
               <img src = "imagequiz/image/cherryblossom.png"/>
           )
           */
    }
}
class Flower {
    constructor(name, pictureName) {
        this.name = name;
        this.picture = pictureName;
    }
}



export default Images;
