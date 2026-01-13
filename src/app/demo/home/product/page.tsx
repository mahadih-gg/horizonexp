'use client';

import CustomDemoProductPage from '@/app/demo/components/CustomDemoProductPage';

const UserReviewDemoPage = () => {
  return (
    <CustomDemoProductPage
      imageSrc="home"
      title="Cord Bowen Sofa"
      price={1259.99}
      collectionLabel="New Collection"
      accordionItems={[
        {
          value: 'productInfo',
          title: 'Product Information',
          content: 'The seat combines faux leather back add a luxurious style in your home decor. Thick sponge, wide armrest and soft ottoman provide more comfort on sitting.',
        },
        {
          value: 'customerReviews',
          title: 'Customer Reviews',
          content: 'Michael D. - "This sofa is incredibly comfortable! The faux leather looks premium and the cushions are perfect. Great addition to our living room."\n\nJennifer W. - "Love the modern design and the ottoman is a nice bonus. Assembly was straightforward and the quality is excellent."\n\nRobert P. - "Very comfortable for long sitting sessions. The wide armrests are perfect for resting. Highly satisfied with this purchase!"',
        },
        {
          value: 'composition',
          title: 'Composition',
          content: 'Frame: Solid wood with reinforced joints\nUpholstery: Faux leather (back), Premium corduroy fabric (seat)\nCushions: High-density foam with fiberfill\nLegs: Golden metal legs with protective caps\nDimensions: 72" W x 32" D x 30" H\nWeight Capacity: 500 lbs\nWarranty: 5-year frame warranty, 2-year fabric warranty',
        },
      ]}
    />
  );
};

export default UserReviewDemoPage;

