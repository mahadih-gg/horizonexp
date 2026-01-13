'use client';

import CustomDemoProductPage from '@/app/demo/components/CustomDemoProductPage';

const UserReviewDemoPage = () => {
  return (
    <CustomDemoProductPage
      imageSrc="fashion"
      title="Faux Fur Jacket"
      price={130.00}
      collectionLabel="New Collection"
      accordionItems={[
        {
          value: 'productInfo',
          title: 'Product Information',
          content: 'Experience exceptional warmth and style with our Faux Fur Reversible Hooded Jacket. This expertly crafted piece offers a plush, attached hood and a button-front closure.',
        },
        {
          value: 'customerReviews',
          title: 'Customer Reviews',
          content: 'Sarah M. - "Absolutely love this jacket! The faux fur is so soft and warm. Perfect for winter and looks incredibly stylish. Highly recommend!"\n\nJessica L. - "Great quality and the reversible feature is a bonus. Fits true to size and the hood is perfect for windy days."\n\nEmily R. - "Beautiful jacket that keeps me warm without being too bulky. The button closure is sturdy and the overall design is elegant."',
        },
        {
          value: 'moreInformation',
          title: 'More Information',
          content: 'Material: 100% Polyester faux fur\nCare Instructions: Machine wash cold, gentle cycle. Do not bleach. Tumble dry low or air dry.\nSizing: Available in sizes XS-XL. Runs true to size.\nShipping: Free shipping on orders over $50. 30-day return policy.\nWarranty: 1-year manufacturer warranty on materials and craftsmanship.',
        },
      ]}
    />
  );
};

export default UserReviewDemoPage;

