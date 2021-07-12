import TenBest from './images/10best.jpg';
import Orlando from './images/orlando.png';
import RealRadio from './images/realradio.png';
import UniqueEats from './images/unique-eats.jpg';
import Summit from './images/summit.png';
import TheGame from './images/the-game.jpg';
import SummitPDF from './files/summit.pdf';
import UniqueEatsPDF from './files/unique-eats.pdf';
import WygmAudio from './files/wygm.mp3';
import PrimetimeKitchenInterview from './files/PrimetimeKitchenInterview.mp3';

export default [
  {
    name: 'fm96.9: The Game',
    image: TheGame.src,
    audio: WygmAudio,
    text: "You know it's real italian when the lady gives you a hug and a kiss on the cheek.",
  },
  {
    name: 'Unique Eats Orlando',
    image: UniqueEats.src,
    linkTo: UniqueEatsPDF,
    text: 'Chef Isabella Morgia di Vicari, who owns and operates this homey spot with her husband, Jeff Morgia, really, really knows meatballs.',
  },
  {
    name: 'Summit Magazine',
    image: Summit.src,
    linkTo: SummitPDF,
    text: 'The Meatball Stoppe grabs you by the hand and brings you right into an Italian home full of good food and great company.',
  },
  {
    name: 'Orlando Sentinel',
    image: Orlando.src,
    linkTo:
      'http://www.orlandosentinel.com/entertainment/restaurants/foodie/os-more-than-just-meatballs-at-the-meatball-stoppe-20160503-story.html',
    text: 'From the moment I walked into The Meatball Stoppe, owner Isabella Morgia di Vicari made me feet at home with her hug and exuberant personality.',
  },
  {
    name: 'Real Radio 104.1',
    image: RealRadio.src,
    audio: PrimetimeKitchenInterview,
    text: 'The chicken meatball, buffalo style, balanced with blue cheese on top––that with the white-bean ragout is crazy killer.',
  },
  {
    name: 'USA Today 10 Best',
    image: TenBest.src,
    linkTo: 'http://www.10best.com/destinations/florida/orlando/restaurants/family-friendly/',
    text: "Orlando's #1 ranked most family-friendly restaurant and #7 best value in USA Today's travel guide.",
  },
];
