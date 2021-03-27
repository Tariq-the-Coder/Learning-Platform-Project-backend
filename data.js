import bcrypt from 'bcryptjs';
// import img1 from './images/img2.jpg'
// import img2 from './images/img3.jpg'
// import img3 from './images/img7.jpg'


const data = {
    users: [
        {
            name: 'Tarik',
            email: 'tariq@gmail.com',
            password: bcrypt.hashSync('1+2+3+4', 10),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 10),
            isAdmin: false,
        },
    ],
    products: [
        {
            name: 'UI UX Designing',
            category: 'Pants',
            image: '/images/im2.jpg',
            countInStock: 18,
            price: '120',
            rating: 4.5,
            numReviews: 15,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, temporibus.'
        },
        {
            name: 'Web Development',
            category: 'Pants',
            image: '/images/im3.jpg',
            countInStock: 3,
            price: '149',
            rating: 4.2,
            numReviews: 109,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, temporibus.'
        },
        {
            name: 'Graphic Designing',
            category: 'Pants',
            image: '/images/img3.jpg',
            countInStock: 200,
            price: '999',
            rating: 4.9,
            numReviews: 1499,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, temporibus.'
        },
    ],
}

export default data;