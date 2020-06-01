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

// router.get('/seed', (req, res) => {
//     Plants.create([
//     {
//         name: "Burro's Tail",
//         category: 'Low Maintenance',
//         type: 'succulent',
//         image: 'https://cdn.shopify.com/s/files/1/2198/4603/files/IMG_4268_1024x1024.JPG?v=1563762901',
//         size: '3 feet',
//         petFriendly: false,
//         plantCare: {
//             water: 'Let soil dry before watering',
//             sun: 'Full sun to partial shade'
//         }
//     },
//     {
//         name: 'Hens-and-Chicks',
//         category: 'Low Maintenance',
//         type: 'succulent',
//         image: 'https://www.thespruce.com/thmb/qrWRABcI6K_plsLUn2cX8WS_-QE=/2358x1613/filters:fill(auto,1)/kararileysempervivum-18-crop-565dd32562e34681a627e2de84f691e1.jpg',
//         size: '.5 feet',
//         petFriendly: false,
//         plantCare: {
//             water: 'Let soil dry completely before watering',
//             sun: 'Full sun to partial shade'
//         }
//     },
//     {
//         name: 'Jade Plant',
//         category: 'Low Maintenance',
//         image: 'https://images.crateandbarrel.com/is/image/Crate/PottedJadePlantSHF16',
//         size: '1 foot',
//         petFriendly: false,
//         plantCare: {
//             water: 'Let soil dry completely before watering',
//             sun: 'Full sun'
//         }
//     },
//     {
//         name: 'Ponytail Palm',
//         category: 'Low Maintenance',
//         image: 'https://cdn.shopify.com/s/files/1/0013/3529/6118/products/Lechuza-Color-35-White_3bbba3d9-a492-43f2-b2f2-e95ed97bd8d0.jpg?v=1544499885',
//         size: '4 feet',
//         petFriendly: false,
//         plantCare: {
//             water: 'Water every 4-5 days, water from spring to fall',
//             sun: 'Bright, indirect sun'
//         }
//     },
//     {
//         name: 'African Violet',
//         category: 'Pet Friendly',
//         image: 'https://www.almanac.com/sites/default/files/styles/opengraph/public/image_nodes/african-violet-houseplant.jpg?itok=qiMZjFZs',
//         size: 'Less than 12 inches',
//         petFriendly: true,
//         plantCare: {
//             water: 'Keep soil moderately moist, water from the bottom',
//             sun: 'Indirect sunlight'
//         }
//     },
//     {
//         name: 'Friendship Plant',
//         category: 'Pet Friendly',
//         image: 'https://plantingman.com/wp-content/uploads/2018/03/Friendship-plant-Indoor-House-Plants.jpg',
//         size: 'Less than 12 inches',
//         petFriendly: true,
//         plantCare: {
//             water: 'Keep moist',
//             sun: 'Low-medium light'
//         }
//     },
//     {
//         name: 'Lipstick Plant',
//         category: 'Pet Friendly',
//         image: 'https://cdn.shopify.com/s/files/1/0212/1030/0480/products/Mona-Lisa-Lipstick-Plant-Hanging-Basket.jpg?v=1577197824',
//         size: 'Up to 20 inches tall',
//         petFriendly: true,
//         plantCare: {
//             water: 'Allow top 25% of soil dry out before watering',
//             sun: 'Full morning sun'
//         }
//     },
//     {
//         name: 'Parlor Palm',
//         category: 'Pet Friendly',
//         image: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_parlor-palm_hover_cream.jpg?v=1588175958',
//         size: '4-8 feet',
//         petFriendly: true,
//         plantCare: {
//             water: 'Soil should be evenly moist, less water during the winter',
//             sun: 'bright, indirect light or low light'
//         }
//     },
//     {
//         name: 'String of Pearls',
//         category: 'Mood Booster',
//         image: 'https://www.jacksonandperkins.com/images/xxl/27677.jpg',
//         size: '2-3 inches tall, hanging plant',
//         petFriendly: false,
//         plantCare: {
//             water: 'Let soil dry completely before watering again',
//             sun: 'Bright, indirect sunlight'
//         }
//     },
//     {
//         name: 'Split Leaf Philodendron',
//         category: 'Mood Booster',
//         image: 'https://thomsonslandscaping.com/wp-content/uploads/1947-1.jpg',
//         size: '3-4 feet',
//         petFriendly: false,
//         plantCare: {
//             water: 'Keep soil moist spring through fall, let dry between waterings in winter',
//             sun: 'Bright, indirect sunlight'
//         }
//     },
//     {
//         name: 'Kalanchoe',
//         category: 'Mood Booster',
//         image: 'https://res.cloudinary.com/bloomnation/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1518162914/vendor/4192/catalog/product/2/0/20180208114923_file_5a7ce203c255e.jpg',
//         size: '6-12 inches',
//         petFriendly: false,
//         plantCare: {
//             water: 'Water when the soil feels dry, avoid wetting the leaves',
//             sun: 'Bright sun'
//         }
//     },
//     {
//         name: 'Calathea',
//         category: 'Mood Booster',
//         image: 'https://cdn.shopify.com/s/files/1/0260/3037/4957/products/medium-plant-calathea-white-pot_720x@2x.jpg?v=1573613645',
//         size: '1-2 feet',
//         petFriendly: false,
//         plantCare: {
//             water: 'Water when the topsoil feels dry',
//             sun: 'Indirect sunlight'
//         }
//     },
//     {
//         name: 'Oxalis',
//         category: 'Mood Booster',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzFaRb1A55Cq6vZqxdh41qqXpQKwOhWFHrLtAFkmbsoYcS2OVO&usqp=CAU',
//         size: '6-12 inches',
//         petFriendly: false,
//         plantCare: {
//             water: '2-3 times per month',
//             sun: 'Partial sun'
//         }
//     },

//     {
//         name: "Bird's Nest Fern",
//         category: 'Mood Booster',
//         image: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_birds-nest-fern_featured.jpg?v=1586542608',
//         size: '1-2 feet',
//         petFriendly: false,
//         plantCare: {
//             water: '1-2 times per week',
//             sun: 'Light morning sun'
//         }
//     },
//     {
//         name: 'Dwarf Date Palm',
//         category: 'Air Purifying',
//         image: 'https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Pygmy_Date_Palm_450_1_grande.jpg?v=1549683425',
//         size: '6-10 feet',
//         petFriendly: false,
//         plantCare: {
//             water: 'Once per week',
//             sun: 'Partial sun'
//         }
//     },
//     {
//         name: 'Peace Lily',
//         category: 'Air Purifying',
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61gpcJHlfIL._AC_SX466_.jpg',
//         size: '1-3 feet',
//         petFriendly: false,
//         plantCare: {
//             water: 'Keep soil moist',
//             sun: 'Light, partial shade'
//         }
//     },
//     {
//         name: 'Chrysanthemums',
//         category: 'Air Purifying',
//         image: 'https://imgaz3.staticbg.com/thumb/large/oaupload/banggood/images/14/92/b95e8cef-4f07-4e54-9b32-4b668e21e550.jpg',
//         size: '1 foot',
//         petFriendly: false,
//         plantCare: {
//             water: '1 time per week',
//             sun: 'Partial Sun'
//         }
//     },
//     {
//         name: 'Weeping Fig/Ficus',
//         category: 'Air Purifying',
//         image: 'https://www.plantvine.com/plants/Ficus-Benjamian-Braided-Large.jpg',
//         size: '6-8 feet',
//         petFriendly: false,
//         plantCare: {
//             water: 'Once per week',
//             sun: 'direct sunlight'
//         }
//     },
// ]),
//     res.send('Hello World')
// });

// POST
router.post('/', (req, res) => {
    User.create(req.body, (error, createdUser) => {
        res.json(createdUser);
    });
})

// DESTROY
router.delete('/:id', (req, res) => {
    Plants.find(req.params.id, (error, deletedPlant) => {
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