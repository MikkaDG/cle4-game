import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import playerImage from '../images/player1.png'
import suhailImage from '../images/suhail/suhail.png'
import mikeImage from '../images/mike/mike.png'
import mickImage from '../images/mick/mick.png'
import cerenImage from '../images/ceren/ceren.png'
import backgroundImage from '../images/background.png'

const Resources = {
    Player: new ImageSource(playerImage),
    Suhail: new ImageSource(suhailImage),
    Mike: new ImageSource(mikeImage),
    Mick: new ImageSource(mickImage),
    Ceren: new ImageSource(cerenImage),
    Background: new ImageSource(backgroundImage),
}

// met deze for loop hoef je niet alles handmatig in de loader te zetten
const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}
const ResourceLoader = new Loader(resourceArray)
export { Resources, ResourceLoader }