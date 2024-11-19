import { Product } from "@/interface/products"


export const AllProducts: Product[] = [
  {
    productId: '0a7aeffa-a87e-415b-8b2d-ed56834ccfd0',
    get slug() {
      return `ID-${this.productId}`
    },
    media: [
      {
        id: 'med-001-1',
        url: '/watch1/img1.jpg',
        alt: 'Handmade Granite Sausages'
      },
      {
        id: 'med-001-2',
        url: '/watch1/img2.jpg',
        alt: 'Handmade Granite Sausages'
      }
    ],
    name: 'Handmade Wooden Bike',
    title: 'Generic Granite Pants',
    description:
      'Buckinghamshire service-desk supply-chains Mouse Switzerland Unbranded Berkshire Customizable payment Computers Barbados Liaison Personal Buckinghamshire Right-sized e-markets Plastic program Franc back-end Towels',
    originalPrice: 21,
    quantity: 1,
    tag: 'hot',
    category: 'woman',
    stock: 0,
    rating: 65,
    brand: 'Citizen',
    warranty: 1,
    sku: 'CB5007-51H',
    gender: 'male',
    get price() {
      return this.originalPrice - (this.originalPrice * this.discount) / 100
    },
    discount: 10,
    releaseDate: '2024-07-25',
    reviews: [
      {
        id: 'rev-001-1',
        username: 'John Smith',
        message: 'Great quality watch, very satisfied with the purchase. The build quality is exceptional.',
        rating: 5,
        date: '2024-02-15',
        avatarUrl: '/avatars/user1.jpg'
      },
      {
        id: 'rev-001-2',
        username: 'Emma Wilson',
        message: 'Good watch but the delivery took longer than expected.',
        rating: 4,
        date: '2024-01-28',
        avatarUrl: '/avatars/user2.jpg'
      },
      {
        id: 'rev-001-3',
        username: 'Michael Brown',
        message: 'Excellent value for money. Would definitely recommend!',
        rating: 5,
        date: '2024-01-10',
        avatarUrl: '/avatars/user3.jpg'
      }
    ]
  },
  {
    productId: '3689af39-1b06-498d-a207-8535b721858c',
    get slug() {
      return `ID-${this.productId}`
    },
    media: [
      {
        id: 'med-001-3',
        url: '/watch1/img2.jpg',
        alt: 'Intelligent Frozen Tuna'
      },
      {
        id: 'med-001-4',
        url: '/watch1/img3.jpg',
        alt: 'Handmade Granite Sausages'
      }
    ],
    name: 'Ergonomic Steel Pants',
    title: 'Sleek Metal Sausages',
    description:
      'Industrial Myanmar e-business implement Bike bandwidth Applications aggregate Beauty Cross-platform mobile Card Bacon Cheese',

    originalPrice: 41,
    quantity: 1,
    tag: 'new',
    category: 'kids',
    stock: 9,
    rating: 65,
    brand: 'Citizen',
    warranty: 3,
    sku: 'CB5007-51H',
    gender: 'female',
    get price() {
      return this.originalPrice - (this.originalPrice * this.discount) / 100
    },
    discount: 40,
    releaseDate: '2024-09-26',
    reviews: [
      {
        id: 'rev-001-1',
        username: 'John Smith',
        message: 'Great quality watch, very satisfied with the purchase. The build quality is exceptional.',
        rating: 5,
        date: '2024-02-15',
        avatarUrl: '/avatars/user1.jpg'
      },
      {
        id: 'rev-001-2',
        username: 'Emma Wilson',
        message: 'Good watch but the delivery took longer than expected.',
        rating: 4,
        date: '2024-01-28',
        avatarUrl: '/avatars/user2.jpg'
      },
      {
        id: 'rev-001-3',
        username: 'Michael Brown',
        message: 'Excellent value for money. Would definitely recommend!',
        rating: 5,
        date: '2024-01-10',
        avatarUrl: '/avatars/user3.jpg'
      }
    ]
  },
  {
    productId: '1f5f0e2c-42c1-4b6c-8fa3-77075f14da3e',
    get slug() {
      return `ID-${this.productId}`
    },
    media: [
      {
        id: 'med-001-5',
        url: '/watch1/img3.jpg',
        alt: 'Incredible Concrete Towels'
      },
      {
        id: 'med-001-6',
        url: '/watch1/img1.jpg',
        alt: 'Handmade Granite Sausages'
      }
    ],
    name: 'Small Cotton Shirt',
    title: 'Practical Cotton Ball',
    description:
      'mobile quantify Tuna Kansas Computer definition Sahara Cheese actuating Lead Intuitive purple Business-focused XSS',
    rating: 65,
    brand: 'Citizen',
    warranty: 1,
    sku: 'CB5007-51H',
    gender: 'male',
    get price() {
      return this.originalPrice - (this.originalPrice * this.discount) / 100
    },
    discount: 0,
    originalPrice: 13,
    quantity: 1,
    tag: 'sold',
    category: 'couple',
    stock: 5,
    releaseDate: '2024-06-29',
    reviews: [
      {
        id: 'rev-001-1',
        username: 'John Smith',
        message: 'Great quality watch, very satisfied with the purchase. The build quality is exceptional.',
        rating: 5,
        date: '2024-02-15',
        avatarUrl: '/avatars/user1.jpg'
      },
      {
        id: 'rev-001-2',
        username: 'Emma Wilson',
        message: 'Good watch but the delivery took longer than expected.',
        rating: 4,
        date: '2024-01-28',
        avatarUrl: '/avatars/user2.jpg'
      },
      {
        id: 'rev-001-3',
        username: 'Michael Brown',
        message: 'Excellent value for money. Would definitely recommend!',
        rating: 5,
        date: '2024-01-10',
        avatarUrl: '/avatars/user3.jpg'
      }
    ]
  },
  {
    productId: 'e8e4d781-3db9-4b11-b68a-10a9f66512c6',
    get slug() {
      return `ID-${this.productId}`
    },
    media: [
      {
        id: 'med-001-7',
        url: '/watch1/img1.jpg',
        alt: 'Tasty Frozen Pizza'
      },
      {
        id: 'med-001-8',
        url: '/watch1/img3.jpg',
        alt: 'Handmade Granite Sausages'
      }
    ],
    name: 'Incredible Soft Salad',
    title:
      'Licensed Plastic Gloves Licensed Plastic Gloves Licensed Plastic Gloves Licensed Plastic Gloves ',
    description:
      'Industrial Myanmar e-business implement Bike bandwidth Applications aggregate Beauty Cross-platform mobile Card Bacon Cheese',
    rating: 65,
    brand: 'Citizen',
    warranty: 1,
    sku: 'CB5007-51H',
    gender: 'male',
    get price() {
      return this.originalPrice - (this.originalPrice * this.discount) / 100
    },
    discount: 80,
    releaseDate: '2024-06-09',
    originalPrice: 14,
    quantity: 1,
    tag: 'bestseller',
    category: 'woman',
    stock: 5,
    reviews: [
      {
        id: 'rev-001-1',
        username: 'John Smith',
        message: 'Great quality watch, very satisfied with the purchase. The build quality is exceptional.',
        rating: 5,
        date: '2024-02-15',
        avatarUrl: '/avatars/user1.jpg'
      },
      {
        id: 'rev-001-2',
        username: 'Emma Wilson',
        message: 'Good watch but the delivery took longer than expected.',
        rating: 4,
        date: '2024-01-28',
        avatarUrl: '/avatars/user2.jpg'
      },
      {
        id: 'rev-001-3',
        username: 'Michael Brown',
        message: 'Excellent value for money. Would definitely recommend!',
        rating: 5,
        date: '2024-01-10',
        avatarUrl: '/avatars/user3.jpg'
      }
    ]
  },
  {
    productId: 'f391d7ca-cf4c-4154-8476-8759aa328f83',
    get slug() {
      return `ID-${this.productId}`
    },
    media: [
      {
        id: 'med-001-9',
        url: '/watch1/img2.jpg',
        alt: 'Rustic Metal Salad'
      },
      {
        id: 'med-001-10',
        url: '/watch1/img3.jpg',
        alt: 'Handmade Granite Sausages'
      }
    ],
    name: 'Handcrafted Steel Bike',
    title: 'Ergonomic Fresh Chicken',
    description:
      'Industrial Myanmar e-business implement Bike bandwidth Applications aggregate Beauty Cross-platform mobile Card Bacon Cheese',
    originalPrice: 33,
    quantity: 1,
    tag: 'popular',
    category: 'couple',
    stock: 4,
    rating: 65,
    brand: 'Citizen',
    warranty: 1,
    sku: 'CB5007-51H',
    gender: 'male',
    get price() {
      return this.originalPrice - (this.originalPrice * this.discount) / 100
    },
    discount: 6,
    releaseDate: '2024-07-23',
    reviews: [
      {
        id: 'rev-001-1',
        username: 'John Smith',
        message: 'Great quality watch, very satisfied with the purchase. The build quality is exceptional.',
        rating: 5,
        date: '2024-02-15',
        avatarUrl: '/avatars/user1.jpg'
      },
      {
        id: 'rev-001-2',
        username: 'Emma Wilson',
        message: 'Good watch but the delivery took longer than expected.',
        rating: 4,
        date: '2024-01-28',
        avatarUrl: '/avatars/user2.jpg'
      },
      {
        id: 'rev-001-3',
        username: 'Michael Brown',
        message: 'Excellent value for money. Would definitely recommend!',
        rating: 5,
        date: '2024-01-10',
        avatarUrl: '/avatars/user3.jpg'
      }
    ]
  },
  {
    productId: '23d14b0f-bb58-4771-9647-18be6c178337',
    get slug() {
      return `ID-${this.productId}`
    },
    media: [
      {
        id: 'med-001-11',
        url: '/watch1/img3.jpg',
        alt: 'Incredible Rubber Mouse'
      },
      {
        id: 'med-001-12',
        url: '/watch1/img1.jpg',
        alt: 'Handmade Granite Sausages'
      }
    ],
    name: 'Unbranded Fresh Pants',
    title: 'Unbranded Wooden Chicken',
    description:
      'Buckinghamshire service-desk supply-chains Mouse Switzerland Unbranded Berkshire Customizable payment Computers Barbados Liaison Personal Buckinghamshire Right-sized e-markets Plastic program Franc back-end Towels',
    rating: 65,
    brand: 'Citizen',
    warranty: 1,
    sku: 'CB5007-51H',
    gender: 'male',
    get price() {
      return this.originalPrice - (this.originalPrice * this.discount) / 100
    },
    discount: 50,
    releaseDate: '2024-09-01',
    originalPrice: 98,
    quantity: 1,
    tag: 'new',
    category: 'woman',
    stock: 2,
    reviews: [
      {
        id: 'rev-001-1',
        username: 'John Smith',
        message: 'Great quality watch, very satisfied with the purchase. The build quality is exceptional.',
        rating: 5,
        date: '2024-02-15',
        avatarUrl: '/avatars/user1.jpg'
      },
      {
        id: 'rev-001-2',
        username: 'Emma Wilson',
        message: 'Good watch but the delivery took longer than expected.',
        rating: 4,
        date: '2024-01-28',
        avatarUrl: '/avatars/user2.jpg'
      },
      {
        id: 'rev-001-3',
        username: 'Michael Brown',
        message: 'Excellent value for money. Would definitely recommend!',
        rating: 5,
        date: '2024-01-10',
        avatarUrl: '/avatars/user3.jpg'
      }
    ]
  },
  {
    productId: '87340ede-6f6c-49cf-b95d-8476c9bac571',
    get slug() {
      return `ID-${this.productId}`
    },
    media: [
      {
        id: 'med-001-13',
        url: '/watch1/img1.jpg',
        alt: 'Licensed Steel Pants'
      },
      {
        id: 'med-001-14',
        url: '/watch1/img2.jpg',
        alt: 'Handmade Granite Sausages'
      }
    ],
    name: 'Awesome Cotton Sausages',
    title: 'Licensed Granite Soap',
    description:
      'mobile quantify Tuna Kansas Computer definition Sahara Cheese actuating Lead Intuitive purple Business-focused XSS',
    rating: 65,
    brand: 'Citizen',
    warranty: 1,
    sku: 'CB5007-51H',
    gender: 'male',
    get price() {
      return this.originalPrice - (this.originalPrice * this.discount) / 100
    },
    discount: 20,
    releaseDate: '2024-07-07',
    originalPrice: 37,
    quantity: 1,
    tag: 'hot',
    category: 'kids',
    stock: 3,
    reviews: [
      {
        id: 'rev-001-1',
        username: 'John Smith',
        message: 'Great quality watch, very satisfied with the purchase. The build quality is exceptional.',
        rating: 5,
        date: '2024-02-15',
        avatarUrl: '/avatars/user1.jpg'
      },
      {
        id: 'rev-001-2',
        username: 'Emma Wilson',
        message: 'Good watch but the delivery took longer than expected.',
        rating: 4,
        date: '2024-01-28',
        avatarUrl: '/avatars/user2.jpg'
      },
      {
        id: 'rev-001-3',
        username: 'Michael Brown',
        message: 'Excellent value for money. Would definitely recommend!',
        rating: 5,
        date: '2024-01-10',
        avatarUrl: '/avatars/user3.jpg'
      }
    ]
  },
  {
    productId: 'c4a9e175-8f0d-4c89-9d1c-6a90f4c9b751',
    get slug() {
      return `ID-${this.productId}`
    },
    media: [
      {
        id: 'med-008-1',
        url: '/watch1/img1.jpg',
        alt: 'Premium Digital Watch'
      },
      {
        id: 'med-008-2',
        url: '/watch1/img2.jpg',
        alt: 'Premium Digital Watch Side View'
      }
    ],
    name: 'Premium Digital Watch',
    title: 'Smart Digital Chronograph',
    description: 'Advanced digital watch with smart features, chronograph, and water resistance up to 100m. Perfect for both casual and professional use.',
    originalPrice: 299,
    quantity: 1,
    tag: 'popular',
    category: 'men',
    stock: 15,
    rating: 85,
    brand: 'Citizen',
    warranty: 2,
    sku: 'DW2024-X1',
    gender: 'male',
    get price() {
      return this.originalPrice - (this.originalPrice * this.discount) / 100
    },
    discount: 15,
    releaseDate: '2024-08-15',
    reviews: [
      {
        id: 'rev-008-1',
        username: 'David Chen',
        message: 'Amazing smart features and battery life. Worth every penny!',
        rating: 5,
        date: '2024-03-10',
        avatarUrl: '/avatars/user7.jpg'
      },
      {
        id: 'rev-008-2',
        username: 'Sarah Johnson',
        message: 'The watch face is beautiful and the smart features are very useful.',
        rating: 5,
        date: '2024-03-05',
        avatarUrl: '/avatars/user8.jpg'
      },
      {
        id: 'rev-008-3',
        username: 'Robert Martinez',
        message: 'Good watch but the app could use some improvements.',
        rating: 4,
        date: '2024-02-28',
        avatarUrl: '/avatars/user9.jpg'
      },
      {
        id: 'rev-008-4',
        username: 'Lisa Wong',
        message: 'Excellent build quality and very comfortable to wear.',
        rating: 5,
        date: '2024-02-20',
        avatarUrl: '/avatars/user10.jpg'
      }
    ]
  },
  {
    productId: 'e5b12c43-7d8f-4a91-b8e2-9f4d23c76d12',
    get slug() {
      return `ID-${this.productId}`
    },
    media: [
      {
        id: 'med-009-1',
        url: '/watch1/img1.jpg',
        alt: 'Limited Edition Gold Watch'
      },
      {
        id: 'med-009-2',
        url: '/watch1/img2.jpg',
        alt: 'Limited Edition Gold Watch Close-up'
      }
    ],
    name: 'Limited Edition Gold Watch',
    title: 'Luxury Gold-Plated Automatic Watch',
    description: 'Exclusive limited edition gold-plated automatic watch with sapphire crystal and genuine leather strap. Only 500 pieces worldwide.',
    originalPrice: 599,
    quantity: 1,
    tag: 'popular',
    category: 'luxury',
    stock: 3,
    rating: 95,
    brand: 'Citizen',
    warranty: 5,
    sku: 'LE2024-G1',
    gender: 'unisex',
    get price() {
      return this.originalPrice - (this.originalPrice * this.discount) / 100
    },
    discount: 0,
    releaseDate: '2024-10-01',
    reviews: [
      {
        id: 'rev-009-1',
        username: 'Alexander White',
        message: 'Absolutely stunning piece. The gold finish is impeccable.',
        rating: 5,
        date: '2024-03-15',
        avatarUrl: '/avatars/user11.jpg'
      },
      {
        id: 'rev-009-2',
        username: 'Victoria Black',
        message: 'A true collector\'s item. The craftsmanship is outstanding.',
        rating: 5,
        date: '2024-03-12',
        avatarUrl: '/avatars/user12.jpg'
      },
      {
        id: 'rev-009-3',
        username: 'James Wilson',
        message: 'The attention to detail is remarkable. Worth the investment.',
        rating: 5,
        date: '2024-03-08',
        avatarUrl: '/avatars/user13.jpg'
      }
    ]
  }
]
