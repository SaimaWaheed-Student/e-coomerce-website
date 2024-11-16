import React from "react";
import Image from "next/image";
interface GalleryItemProps {
    image: string;
    description: string;
    price: string;
  }
  
  const GalleryItem: React.FC<GalleryItemProps> = ({ image,description, price }) => (
    <div className="relative group">
      <Image
      src={image}
      alt="description"
      width={400}
      height={400}
       className="w-full h-64 object-cover rounded-lg shadow-lg" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="text-center text-white">
          <p className="text-lg font-semibold">{description}</p>
          <p className="text-xl font-bold">${price}</p>
        </div>
      </div>
    </div>
  );
  
  const Gallery = () => {
    const items = [
      { image: '/images/img-3.jpg', description: 'Elegant sky blue garara', price: '120' },
      { image: '/images/img-4.jpg', description: 'Stylish white suit', price: '150' },
      { image: '/images/img-5.jpeg', description: 'Classic orange Suit', price: '200' },
      { image: '/images/img-6.jpg', description: 'Floral light aqua garara', price: '90' },
      { image: '/images/img-8.jpg', description: 'dholki dress', price: '180' },
      { image: '/images/img-9.jpeg', description: ' sky blue sharara', price: '70' },
      { image: '/images/black-pink.jpg', description: 'Elegant Pink black Frock', price: '130' },
      { image: '/images/yello- maxi.jpg', description: 'Stylish Yellow Maxi', price: '160' },
      { image: '/images/white-suit-10.jpg', description: 'Classic White Suit', price: '210' },
      { image: '/images/yellow -3.jpg', description: 'Floral Spring yellow Dress', price: '95' },
      { image: '/images/hania-red.jpg', description: 'Red bridal', price: '500' },
      { image: '/images/green-frock.jpg', description: 'Green maxi frock', price: '75' },
      { image: '/images/black.avif', description: 'Elegant black maxi', price: '140' },
      { image: '/images/boutique.jpg', description: 'party wear', price: '170' },
      { image: '/images/hania-fone.jpg', description: 'Classic Red fone Suit', price: '220' },
      { image: '/images/images-2.jpg', description: 'Floral purple sharara', price: '400' },
      { image: '/images/images-7.jpg', description: 'Bridal barrat dresses', price: '550' },
      { image: '/images/froks.jpg', description: 'Baby frocks', price: '80' },
      { image: '/images/frock-purple.jpg', description: 'Elegant purple net Frock', price: '150' },
      { image: '/images/frockblue.jpg', description: 'Stylish blue  Maxi', price: '180' },
    ];
  
    return (
      <section id="gallery" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white py-8">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {items.map((item, index) => (
              <GalleryItem key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Gallery;