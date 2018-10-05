import Document from 'next/document';
import Header from './components/Header';
import Footer from './components/Footer';
import Animal from './components/Animal';
class AugustJ extends Document {
    constructor(){
        super();
        
    }
    render() {
        return(
            <div>
               <Header></Header>
               <Footer></Footer>
               <Animal
               animalname="Cat" animaldescription="It has 4 legs.">
               </Animal>
               <Animal animalname="Dog" animaldescription="It barks."></Animal>
                
            </div>
        )
    }

}

export default AugustJ;
