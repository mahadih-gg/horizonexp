'use client';

import CustomDemoProductPage from '@/app/demo/components/CustomDemoProductPage';

const UserReviewDemoPage = () => {
  return (
    <CustomDemoProductPage
      imageSrc="beauty"
      title="Nécessaire lotion"
      price={19.99}
      collectionLabel="New Collection"
      accordionItems={[
        {
          value: 'productInfo',
          title: 'Product Information',
          content: 'Reveal your radiance with our Nécessaire body lotion. Available in 6 flavors, from classic to iridescent coral, it melts into the skin for an instant healthy glow.',
        },
        {
          value: 'customerReviews',
          title: 'Customer Reviews',
          content: 'Amanda K. - "This lotion is amazing! My skin feels so soft and hydrated. The fragrance-free formula is perfect for my sensitive skin."\n\nMaria S. - "Love the texture - it absorbs quickly without feeling greasy. The iridescent coral flavor is my favorite!"\n\nLisa T. - "Great value for the quality. My skin has never felt better. Will definitely repurchase!"',
        },
        {
          value: 'composition',
          title: 'Composition',
          content: 'Water, Glycerin, Caprylic/Capric Triglyceride, Dimethicone, Cetearyl Alcohol, Glyceryl Stearate, Phenoxyethanol, Ethylhexylglycerin, Fragrance (in flavored variants).\n\nFree from: Parabens, Sulfates, Phthalates, Formaldehyde.\n\nVolume: 200 ml / 8.8 fl oz',
        },
      ]}
    />
  );
};

export default UserReviewDemoPage;

