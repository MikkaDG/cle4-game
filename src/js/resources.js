import {ImageSource, Sound, Resource, Loader, Vector} from 'excalibur';
import playerImage from '../images/player1.png'
import suhailImage from '../images/suhail/suhail.png'
import mikeImage from '../images/mike/mike.png'
import mickImage from '../images/mick/mick.png'
import cerenImage from '../images/cerenspritesheet.png'
import backgroundImage from '../images/background.png'
import logoImage from '../images/logo.png'

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
ResourceLoader.logo = logoImage
ResourceLoader.logoHeight = 176
ResourceLoader.logoWidth = 520
ResourceLoader.backgroundColor = '#C2CEBC'
ResourceLoader.logoPosition = new Vector(350, 200)
ResourceLoader.playButtonText = 'Start Collecting Trash'
ResourceLoader.loadingBarPosition = new Vector(350, 420)
ResourceLoader.loadingBarColor = 'Black'

export { Resources, ResourceLoader }