interface Plant {
    id: number;
    name: string;
    description: string;
    price: number;
    potColor: string;
    path: string;
}

import blueCactus from '#/plants/annie-spratt-fbAnIjhrOL4-unsplash.jpg';
import topiaryBall from '#/plants/freddie-marriage-UcfKYTan-LU-unsplash.jpg';
import staghornFern from '#/plants/kara-eads-EbLX7oRo4vI-unsplash.jpg';
import fernLeaf from '#/plants/kara-eads-xRyL63AwZFE-unsplash.jpg';
import fiddleLeafFig from '#/plants/kevin-lessy-aKqw_M1CmfI-unsplash.jpg';
import heartleafPhilodendron from '#/plants/linh-le-giP0e750Dr8-unsplash.jpg';
import eucalyptusPlant from '#/plants/nagy-arnold-X_IvVDuHvDQ-unsplash.jpg';
import swissCheesePlant from '#/plants/olena-bohovyk-r0M9HrfJMBM-unsplash.jpg';
import barrelCactus from '#/plants/sincerely-media-4PMVNJeI3XU-unsplash.jpg';
import monsteraDeliciosa from '#/plants/sindre-aalberg-trLH1jzemt8-unsplash.jpg';
import spottedAloeVera from '#/plants/stephanie-harvey-T0inbt7nRME-unsplash.jpg';
import zebraHaworthia from '#/plants/stephanie-harvey-vHkj3fX9wCk-unsplash.jpg';
import redWaterLily from '#/plants/toa-heftiba-W1yjvf5idqA-unsplash.jpg';
import miniBonsai from '#/plants/zoltan-tasi-yanhwFwyoaU-unsplash.jpg';

const plants: Plant[] = [
    {
        id: 1,
        name: "Blue Cactus",
        description: "A vibrant blue cactus in a terracotta pot, perfect for a minimalist space.",
        price: 25.99,
        potColor: "Terracotta",
        path: blueCactus
    },
    {
        id: 2,
        name: "Topiary Ball",
        description: "A neatly trimmed topiary in a dark green ceramic pot, ideal for modern decor.",
        price: 34.50,
        potColor: "Dark Green",
        path: topiaryBall
    },
    {
        id: 3,
        name: "Staghorn Fern",
        description: "A lush staghorn fern in a wooden pot, adding a natural touch to any room.",
        price: 29.99,
        potColor: "Wood",
        path: staghornFern
    },
    {
        id: 4,
        name: "Fern Leaf",
        description: "A delicate fern leaf, freshly picked, ready to be displayed in a vase.",
        price: 15.00,
        potColor: "None",
        path: fernLeaf
    },
    {
        id: 5,
        name: "Fiddle Leaf Fig",
        description: "A tall fiddle leaf fig in a white pot, great for brightening up a corner.",
        price: 45.00,
        potColor: "White",
        path: fiddleLeafFig
    },
    {
        id: 6,
        name: "Heartleaf Philodendron",
        description: "A cascading philodendron in a hanging black pot, perfect for small spaces.",
        price: 39.99,
        potColor: "Black",
        path: heartleafPhilodendron
    },
    {
        id: 7,
        name: "Eucalyptus Plant",
        description: "A round-leaf eucalyptus in a white pot, bringing a fresh scent to your home.",
        price: 32.00,
        potColor: "White",
        path: eucalyptusPlant
    },
    {
        id: 8,
        name: "Swiss Cheese Plant",
        description: "A large Swiss cheese plant in a two-tone pot, a statement piece for any room.",
        price: 55.00,
        potColor: "Gray and Beige",
        path: swissCheesePlant
    },
    {
        id: 9,
        name: "Barrel Cactus",
        description: "A cluster of barrel cacti in a speckled concrete pot, ideal for a sunny spot.",
        price: 28.50,
        potColor: "Concrete",
        path: barrelCactus
    },
    {
        id: 10,
        name: "Monstera Deliciosa",
        description: "A tall Monstera in a terracotta pot, perfect for adding tropical vibes.",
        price: 49.99,
        potColor: "Terracotta",
        path: monsteraDeliciosa
    },
    {
        id: 11,
        name: "Spotted Aloe Vera",
        description: "A healthy aloe vera with spotted leaves in a concrete pot, great for healing properties.",
        price: 22.50,
        potColor: "Concrete",
        path: spottedAloeVera
    },
    {
        id: 12,
        name: "Zebra Haworthia",
        description: "A small haworthia with striking white-striped leaves in a white pot.",
        price: 18.00,
        potColor: "White",
        path: zebraHaworthia
    },
    {
        id: 13,
        name: "Red Water Lily",
        description: "A beautiful red water lily, naturally grown in a pond setting.",
        price: 40.00,
        potColor: "None",
        path: redWaterLily
    },
    {
        id: 14,
        name: "Mini Bonsai",
        description: "A miniature bonsai tree with a unique trunk in a white pot, perfect for desks.",
        price: 35.99,
        potColor: "White",
        path: miniBonsai
    },
];

export default plants;