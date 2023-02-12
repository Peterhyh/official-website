import sunset from '../assets/img/sunset.jpg';
import pic2 from '../assets/img/pic2.jpg';
import pic3 from '../assets/img/pic3.jpg';
import bnw from '../assets/img/bnw370z.png';
import pic4 from '../assets/img/pic4.png';


export const PHOTOGRAPHS = [
    {
        id: 0,
        name: 'Sunset Breeze',
        image: sunset,
        featured: true,
        description: "Drive away the darkness within.",
        credit:
            'Photographed by Peter Huynh'
    },
    {
        id: 1,
        name: 'Just Business',
        image: pic2,
        featured: false,
        description: "Date night.",
        credit:
            'Photographed by Peter Huynh'
    },
    {
        id: 2,
        name: 'Hideout',
        image: pic3,
        featured: true,
        description: "Alone time.",
        credit:
            'Photographed by Peter Huynh'
    },
    {
        id: 3,
        name: 'VIP',
        image: pic4,
        featured: false,
        special: true,
        description: "Clean and stylish.",
        credit: 'Photographed by Peter Huynh'
    },
    {
        id: 4,
        name: 'Stealth',
        image: bnw,
        featured: false,
        description: "Beauty doesn't always have to be colorful.",
        credit:
            'Photographed by Peter Huynh'
    },
];
