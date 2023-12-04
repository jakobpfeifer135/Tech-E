const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'Computers' },
    { name: 'Monitors' },
    { name: 'Cables' },
    { name: 'Accessories'}
  ]);

  console.log('categories seeded');

  const products = await Product.insertMany([
    {
      brand: 'Brand Name',
      color: 'black',
      name: 'Laptop',
      description: 'A laptop computer',
      image: 'https://t4.ftcdn.net/jpg/01/67/28/69/360_F_167286969_jAEAfUY47qQ1SHqf1SyqSYypOsl0fWYF.jpg',
      price: 129.99,
      quantity: 0,
      category: categories[0]._id,
    },
    {
      brand: 'Brand Name',
      color: 'silver',
      name: 'Desktop',
      description: 'A desktop computer',
      image: 'https://t4.ftcdn.net/jpg/01/67/28/69/360_F_167286969_jAEAfUY47qQ1SHqf1SyqSYypOsl0fWYF.jpg',
      price: 345.00,
      quantity: 0,
      category: categories[0]._id,
    }, 
    {
      brand: 'Brand Name',
      color: 'black',
      name: 'Monitor',
      description: 'A 24" monitor',
      image: 'https://t4.ftcdn.net/jpg/01/67/28/69/360_F_167286969_jAEAfUY47qQ1SHqf1SyqSYypOsl0fWYF.jpg',
      price: 29.99,
      quantity: 0,
      category: categories[1]._id,
    },
    {
      brand: 'Brand Name',
      color: 'black',
      name: 'HDMI',
      description: 'An HDMI cable',
      image: 'https://t4.ftcdn.net/jpg/01/67/28/69/360_F_167286969_jAEAfUY47qQ1SHqf1SyqSYypOsl0fWYF.jpg',
      price: 9.99,
      quantity: 0,
      category: categories[2]._id,
    },
    {
      brand: 'Brand Name',
      color: 'white',
      name: 'Keyboard',
      description: 'A fancy keyboard',
      image: 'https://t4.ftcdn.net/jpg/01/67/28/69/360_F_167286969_jAEAfUY47qQ1SHqf1SyqSYypOsl0fWYF.jpg',
      price: 39.99,
      quantity: 0,
      category: categories[3]._id,
    }
  ]);

  console.log('products seeded');

  await User.create({
    firstName: 'Test',
    lastName: 'User',
    email: 'test@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
