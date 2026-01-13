'use client';

import CustomDemoProductPage from '@/app/demo/components/CustomDemoProductPage';

const UserReviewDemoPage = () => {
  return (
    <CustomDemoProductPage
      imageSrc="fitness"
      title="Supplement Boost"
      price={129.99}
      collectionLabel="New Collection"
      accordionItems={[
        {
          value: 'productInfo',
          title: 'Product Information',
          content: 'Our whey isolate contains lactase (3,000 FCC per serving). The added lactase (enzyme) improves the digestion of lactose for people who have difficulty digesting it.',
        },
        {
          value: 'customerReviews',
          title: 'Customer Reviews',
          content: 'Chris T. - "This supplement has been a game-changer for my digestion! No more bloating after workouts. Highly effective!"\n\nNicole A. - "Perfect for someone with lactose sensitivity. The protein quality is excellent and it mixes well. Great taste too!"\n\nMark S. - "Best whey isolate I\'ve tried. The added lactase makes a huge difference. My stomach feels great after every shake."',
        },
        {
          value: 'composition',
          title: 'Composition',
          content: 'Whey Protein Isolate: 25g per serving\nLactase Enzyme: 3,000 FCC units per serving\nCalories: 110 per serving\nFat: 0.5g\nCarbohydrates: 2g\nSugar: 1g\nProtein: 25g\n\nOther Ingredients: Natural flavors, Stevia, Xanthan gum\n\nFree from: Lactose, Gluten, Soy, Artificial colors\n\nServing Size: 1 scoop (30g)\nServings per Container: 30\n\nAllergen Information: Contains milk. Manufactured in a facility that processes eggs, soy, and tree nuts.',
        },
      ]}
    />
  );
};

export default UserReviewDemoPage;

