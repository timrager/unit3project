//=======================
// DEPENDENCIES
//=======================
const express = require('express');
const router = express.Router();

//=======================
// MODELS
//=======================
const Plants = require('../models/plants.js');
const User = require('../models/user.js');

//=======================
// ROUTES
//=======================
// GET
router.get('/', (req,res) => {
    Plants.find({}, (err, foundPlants) => {
        res.json(foundPlants);
    })
})

router.get('/seed', (req, res) => {
    Plants.create([
        {
            name: "Burro's Tail",
            category: 'Low Maintenance',
            type: 'succulent',
            image: '../../models/seedImages/burroTail.jpeg',
            size: '3 feet',
            petFriendly: false,
            plantCare: {
                water: 'Let soil dry before watering',
                sun: 'Full sun to partial shade'
            }
        },
        {
            name: 'Hens-and-Chicks',
            category: 'Low Maintenance',
            type: 'succulent',
            image: '/seedImages/hensandchicks.jpg',
            size: '.5 feet',
            petFriendly: false,
            plantCare: {
                water: 'Let soil dry completely before watering',
                sun: 'Full sun to partial shade'
            }
        },
        {
            name: 'Jade Plant',
            category: 'Low Maintenance',
            image: '/seedImages/jadePlant.jpg',
            size: '1 foot',
            petFriendly: false,
            plantCare: {
                water: 'Let soil dry completely before watering',
                sun: 'Full sun'
            }
        },
        {
            name: 'Ponytail Palm',
            category: 'Low Maintenance',
            image: '/seedImages/ponytailPalm.jpeg',
            size: '4 feet',
            petFriendly: false,
            plantCare: {
                water: 'Water every 4-5 days, water from spring to fall',
                sun: 'Bright, indirect sun'
            }
        },
        {
            name: 'African Violet',
            category: 'Pet Friendly',
            image: '/seedImages/africanViolet.jpeg',
            size: 'Less than 12 inches',
            petFriendly: true,
            plantCare: {
                water: 'Keep soil moderately moist, water from the bottom',
                sun: 'Indirect sunlight'
            }
        },
        {
            name: 'Friendship Plant',
            category: 'Pet Friendly',
            image: '/seedImages/friendshipPlant.jpg',
            size: 'Less than 12 inches',
            petFriendly: true,
            plantCare: {
                water: 'Keep moist',
                sun: 'Low-medium light'
            }
        },
        {
            name: 'Lipstick Plant',
            category: 'Pet Friendly',
            image: '/seedImages/lipstickPlant.jpg',
            size: 'Up to 20 inches tall',
            petFriendly: true,
            plantCare: {
                water: 'Allow top 25% of soil dry out before watering',
                sun: 'Full morning sun'
            }
        },
        {
            name: 'Parlor Palm',
            category: 'Pet Friendly',
            image: '/seedImages/parlorPalm.jpg',
            size: '4-8 feet',
            petFriendly: true,
            plantCare: {
                water: 'Soil should be evenly moist, less water during the winter',
                sun: 'bright, indirect light or low light'
            }
        },
        {
            name: 'String of Pearls',
            category: 'Mood Booster',
            image: '/seedImages/stringOfPearls.jpg',
            size: '2-3 inches tall, hanging plant',
            petFriendly: false,
            plantCare: {
                water: 'Let soil dry completely before watering again',
                sun: 'Bright, indirect sunlight'
            }
        },
        {
            name: 'Split Leaf Philodendron',
            category: 'Mood Booster',
            image: '/seedImages/splitLeafPhilodendron.jpg',
            size: '3-4 feet',
            petFriendly: false,
            plantCare: {
                water: 'Keep soil moist spring through fall, let dry between waterings in winter',
                sun: 'Bright, indirect sunlight'
            }
        },
        {
            name: 'Kalanchoe',
            category: 'Mood Booster',
            image: '/seedImages/kalanchoe.jpg',
            size: '6-12 inches',
            petFriendly: false,
            plantCare: {
                water: 'Water when the soil feels dry, avoid wetting the leaves',
                sun: 'Bright sun'
            }
        },
        {
            name: 'Calathea',
            category: 'Mood Booster',
            image: '/seedImages/calathea.jpg',
            size: '1-2 feet',
            petFriendly: false,
            plantCare: {
                water: 'Water when the topsoil feels dry',
                sun: 'Indirect sunlight'
            }
        },
        {
            name: 'Oxalis',
            category: 'Mood Booster',
            image: '/seedImages/oxalis.jpg',
            size: '6-12 inches',
            petFriendly: false,
            plantCare: {
                water: '2-3 times per month',
                sun: 'Partial sun'
            }
        },
    
        {
            name: "Bird's Nest Fern",
            category: 'Mood Booster',
            image: '/seedImages/birdsNestFern.jpg',
            size: '1-2 feet',
            petFriendly: false,
            plantCare: {
                water: '1-2 times per week',
                sun: 'Light morning sun'
            }
        },
        {
            name: 'Dwarf Date Palm',
            category: 'Air Purifying',
            image: '/seedImages/dwarfDatePalm.png',
            size: '6-10 feet',
            petFriendly: false,
            plantCare: {
                water: 'Once per week',
                sun: 'Partial sun'
            }
        },
        {
            name: 'Peace Lily',
            category: 'Air Purifying',
            image: '/seedImages/peaceLily.jpg',
            size: '1-3 feet',
            petFriendly: false,
            plantCare: {
                water: 'Keep soil moist',
                sun: 'Light, partial shade'
            }
        },
        {
            name: 'Chrysanthemums',
            category: 'Air Purifying',
            image: '/seedImages/mums.jpeg',
            size: '1 foot',
            petFriendly: false,
            plantCare: {
                water: '1 time per week',
                sun: 'Partial Sun'
            }
        },
        {
            name: 'Weeping Fig/Ficus',
            category: 'Air Purifying',
            image: '/seedImages/ficus.jpg',
            size: '6-8 feet',
            petFriendly: false,
            plantCare: {
                water: 'Once per week',
                sun: 'direct sunlight'
            }
        },
    ])
    res.send('Hello World')
});

// POST
router.post('/', (req, res) => {
    User.create(req.body, (error, createdUser) => {
        res.json(createdUser);
    });
})

// DESTROY
router.delete('/:id', (req, res) => {
    Plants.find({}, (error, deletedPlant) => {
        res.json(deletedPlant);
        console.log('deleted plants')
    })
})

// UPDATE
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, (error, updatedUser) => {
        res.json(updatedUser);
    })
});

module.exports = router;