'use client';

import CustomDemoProductPage from '@/app/demo/components/CustomDemoProductPage';

const UserReviewDemoPage = () => {
  return (
    <CustomDemoProductPage
      imageSrc="electronics"
      title="X Watch Series"
      price={759.99}
      collectionLabel="New Collection"
      accordionItems={[
        {
          value: 'productInfo',
          title: 'Product Information',
          content: 'The Watch Pro X is built for people who want more than notifications on their wrist - they want a companion that quietly elevates their entire day.',
        },
        {
          value: 'customerReviews',
          title: 'Customer Reviews',
          content: 'Alex R. - "This watch is a game-changer! The battery life is incredible and the notifications are seamless. Love the design too."\n\nSophie L. - "Perfect companion for my daily routine. The health tracking features are accurate and the interface is intuitive."\n\nJames K. - "Worth every penny! The build quality is excellent and it pairs perfectly with my phone. Highly recommend!"',
        },
        {
          value: 'composition',
          title: 'Composition',
          content: 'Display: 1.9" AMOLED touchscreen, Always-on display\nProcessor: Advanced dual-core chipset\nBattery: Up to 7 days battery life, Fast charging\nConnectivity: Bluetooth 5.0, NFC, GPS\nSensors: Heart rate, Accelerometer, Gyroscope, Ambient light\nMaterials: Aluminum case, Sapphire crystal glass, Silicone strap\nWater Resistance: 5 ATM (50 meters)\nCompatibility: iOS 14+ and Android 8.0+\nWarranty: 2-year manufacturer warranty',
        },
      ]}
    />
  );
};

export default UserReviewDemoPage;

