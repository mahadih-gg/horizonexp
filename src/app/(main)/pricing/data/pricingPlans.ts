import { PricingPlan } from '../components/PricingCard';

export const pricingPlans: PricingPlan[] = [
  {
    productId: "prod_THW7lVOxrAuKAx",
    name: "Starter",
    price: 0,
    priceUnit: "per month",
    viewsIncluded: "1,000",
    videosInLibrary: {
      count: "20",
      duration: "2 minutes"
    },
    websitesStores: "1",
    description: "Best for websites/stores looking to test drive Horizon",
    buttonText: "Signup for free",
    footerText: "Must upgrade to continue after limits",
    features: [],
    isHighlighted: false,
    hasButtonGradient: false
  },
  {
    productId: "prod_THW8YfM3Aj1gSN",
    name: "Premium",
    price: 49,
    priceUnit: "per month",
    label: "Free Trial",
    viewsIncluded: "10,000",
    videosInLibrary: {
      count: "100",
      duration: "2 minutes"
    },
    websitesStores: "1",
    description: "Best for websites/stores with up to 10k visitors",
    buttonText: "Start 30-day free trial",
    features: [
      "Remove Powered by Horizon",
      "Premium CTA styles",
      "Shoppable campaigns",
      "Extra views @ $0.005 / view"
    ],
    isHighlighted: false,
    hasButtonGradient: false
  },
  {
    productId: "prod_THW8nc7BkHuueB",
    name: "Pro",
    price: 199,
    priceUnit: "per month",
    label: "Most Popular",
    viewsIncluded: "100,000",
    videosInLibrary: {
      count: "250",
      duration: "2 minutes"
    },
    websitesStores: "3",
    description: "Best for websites/stores with up to 100k visitors",
    buttonText: "Signup for Pro",
    features: [
      "Remove Powered by Horizon",
      "Premium CTA styles",
      "Shoppable campaigns",
      "Extra views @ $0.004 / view"
    ],
    isHighlighted: true,
    hasButtonGradient: true
  },
  {
    productId: "prod_THW8lkVwz8lRut",
    name: "Max",
    price: 499,
    priceUnit: "per month",
    label: "2.5x longer videos",
    viewsIncluded: "250,000",
    videosInLibrary: {
      count: "1,000",
      duration: "5 minutes"
    },
    websitesStores: "10",
    description: "Best for websites/stores with up to 500k visitors",
    buttonText: "Signup for Max",
    features: [
      "Remove Powered by Horizon",
      "Premium CTA styles",
      "Shoppable campaigns",
      "Extra views @ $0.003 / view"
    ],
    isHighlighted: false,
    hasButtonGradient: false
  }
];
