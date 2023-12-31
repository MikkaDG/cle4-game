import {ImageSource, Sound, Resource, Loader, Vector} from 'excalibur';
// import playerImage from '../images/player1.png'
import suhailImage from '../images/suhail/suhailspritesheet.png'
import mikeImage from '../images/mike/mikespritesheet.png'
import mickImage from '../images/mick/mickspritesheet.png'
import cerenImage from '../images/ceren/cerenspritesheet.png'
import background1Image from '../images/background/background1.png'
import background2Image from '../images/background/background2.png'
import background3Image from '../images/background/background3.png'
import logoImage from '../images/logo.png'
import groundImage from '../images/ground/ground2.png'
import fgroundImage from '../images/ground/fground.png'
import suhailKnop from '../images/suhail/suhailvacuum.png'
import mikeKnop from '../images/mike/mike.png'
import mickKnop from '../images/mick/mick.png'
import cerenKnop from '../images/ceren/ceren.png'
import banana from '../images/trash/banana.png'
import can from '../images/trash/can.png'
import paper from '../images/trash/paper.png'
import bag from '../images/trash/bag.png'
import pigeonImage from '../images/enemies/pigeon.png'
import ground2Image from '../images/ground/ground.png'
import trashcanImage from '../images/trashcan.png'
import trashmonsterImage from '../images/enemies/trashmonstersprite.png'
import heartImage from '../images/heart.png'
import bossMusic from '../sounds/bossmusic.mp3'
import victorymusic from '../sounds/mikemusic.mp3'
import preboss from '../sounds/preboss.mp3'
import flyingbirdImage from '../images/enemies/flyingbird.png'
import flyingbirdImageL from '../images/enemies/flyingbirdlong.png'
import start from '../sounds/start.mp3'
import victory from '../sounds/victory.mp3'
import fireworks from '../images/fireworks.png'
import level1 from '../sounds/level1.mp3'
import level2 from '../sounds/level2.mp3'
import level3 from '../sounds/level3.mp3'

const Resources = {
    // Player: new ImageSource(playerImage),
    Suhail: new ImageSource(suhailImage),
    Mike: new ImageSource(mikeImage),
    Mick: new ImageSource(mickImage),
    Ceren: new ImageSource(cerenImage),
    Background1: new ImageSource(background1Image),
    Background2: new ImageSource(background2Image),
    Background3: new ImageSource(background3Image),
    Ground: new ImageSource(groundImage),
    SuhailKnop: new ImageSource(suhailKnop),
    MikeKnop: new ImageSource(mikeKnop),
    MickKnop: new ImageSource(mickKnop),
    CerenKnop: new ImageSource(cerenKnop),
    Banana: new ImageSource(banana),
    Can: new ImageSource(can),
    Paper: new ImageSource(paper),
    Bag: new ImageSource(bag),
    Pigeon: new ImageSource(pigeonImage),
    Fground: new ImageSource(fgroundImage),
    Ground2: new ImageSource(ground2Image),
    Trashcan: new ImageSource(trashcanImage),
    Trashmonster: new ImageSource(trashmonsterImage),
    Heart: new ImageSource(heartImage),
    Fireworks: new ImageSource(fireworks),
    Logo: new ImageSource(logoImage),
    Flyingbird: new ImageSource(flyingbirdImage),
    FlyingbirdL: new ImageSource(flyingbirdImageL),
    Start: new Sound(start),
    Victory: new Sound(victory),
}

const Sounds = {
    bossMusic: new Sound(bossMusic),
    victoryMusic: new Sound(victorymusic),
    preboss: new Sound(preboss),
    Start: new Sound(start),
    Victory: new Sound(victory),
    Level1: new Sound(level1),
    Level2: new Sound(level2),
    Level3: new Sound(level3)
}


// met deze for loop hoef je niet alles handmatig in de loader te zetten
// const resourceArray = []
// for (const key in Resources) {
//     resourceArray.push(Resources[key])
// }

// const ResourceLoader = new Loader(resourceArray)
const ResourceLoader = new Loader([Resources.Suhail, Resources.Mike,
    Resources.Mick, Resources.Ceren, Resources.Background1, Resources.Background2,
    Resources.Background3, Resources.Ground, Resources.SuhailKnop, Resources.MikeKnop,
    Resources.MickKnop, Resources.CerenKnop, Resources.Banana, Resources.Can, Resources.Paper,
    Resources.Bag, Resources.Pigeon, Resources.Fground, Resources.Ground2, Resources.Trashcan,
    Resources.Trashmonster, Resources.Heart, Sounds.bossMusic, Sounds.victoryMusic, Sounds.preboss,
    Sounds.Start, Sounds.Victory, Resources.Fireworks, Resources.Logo, Sounds.Level1, Sounds.Level2,
    Sounds.Level3, Resources.Flyingbird, Resources.FlyingbirdL])
ResourceLoader.logo = logoImage
ResourceLoader.logoHeight = 176
ResourceLoader.logoWidth = 520
ResourceLoader.backgroundColor = '#C2CEBC'
ResourceLoader.logoPosition = new Vector(350, 200)
ResourceLoader.playButtonText = 'Start Collecting Trash'
ResourceLoader.loadingBarPosition = new Vector(350, 420)
ResourceLoader.loadingBarColor = 'Black'

export { Resources, ResourceLoader, Sounds }