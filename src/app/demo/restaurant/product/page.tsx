'use client';

import CustomDemoProductPage from '@/app/demo/components/CustomDemoProductPage';

const UserReviewDemoPage = () => {
  return (
    <CustomDemoProductPage
      imageSrc="restaurant"
      title="Frosted Doughnut"
      price={32.99}
      collectionLabel="Gluten-Free Cookies"
      accordionItems={[
        {
          value: 'productInfo',
          title: 'Product Information',
          content: 'Frosted doughnuts get their name for what\'s on top: frosting. They can be either cake or yeast doughnuts, but sprinkles are a must!',
        },
        {
          value: 'customerReviews',
          title: 'Customer Reviews',
          content: 'David H. - "These doughnuts are absolutely delicious! The frosting is perfect and the sprinkles add a nice crunch. My kids love them!"\n\nSarah B. - "Best gluten-free doughnuts I\'ve ever had. You can\'t tell the difference from regular ones. Highly recommend!"\n\nTom M. - "Fresh, flavorful, and the perfect treat. The cake version is my favorite. Will order again!"',
        },
        {
          value: 'composition',
          title: 'Composition',
          content: 'Ingredients: Gluten-free flour blend, Sugar, Eggs, Butter, Vanilla extract, Baking powder, Salt, Food coloring, Sprinkles.\n\nAllergens: Contains eggs and dairy. May contain traces of nuts.\n\nStorage: Keep refrigerated. Best consumed within 3 days of purchase.\n\nNutrition: Per serving (1 doughnut) - 280 calories, 12g fat, 38g carbs, 4g protein',
        },
      ]}
    />
  );
};

export default UserReviewDemoPage;

