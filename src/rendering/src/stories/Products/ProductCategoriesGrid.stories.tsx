import { Meta } from '@storybook/react';

import { Default as ProductCategoriesGrid } from '../../components/Products/ProductCategoriesGrid';
import { ProductCategory } from 'src/types/productCategory';

export default {
  title: 'Components/Products/ProductCategoriesGrid',
  component: ProductCategoriesGrid,
} as Meta<typeof ProductCategoriesGrid>;

const category1 = {
  Name: 'Item Name',
  fields: {
    Title: {
      value: 'Team Sports',
    },
    Picture: {
      value: {
        src: '/assets/img/categories/team-sports.jpg',
        alt: '',
      },
    },
  },
} as ProductCategory;

const category2 = {
  Name: 'Item Name',
  fields: {
    Title: {
      value: 'Swimming',
    },
    Picture: {
      value: {
        src: '/assets/img/categories/water-sports.jpg',
        alt: '',
      },
    },
  },
} as ProductCategory;

const category3 = {
  Name: 'Item Name',
  fields: {
    Title: {
      value: 'Motor Sports',
    },
    Picture: {
      value: {
        src: '/assets/img/categories/motor-sports.jpg',
        alt: '',
      },
    },
  },
} as ProductCategory;

export const Default = {
  args: {
    fields: {
      Title: {
        value: 'FEATURED SPEAKERS',
      },
      Subtitle: {
        value:
          'Road-test the world’s most trusted sports and fitnessequipment–we’ll be welcoming 2,000 brands at this year’s PLAY! Summit.',
      },
      Categories: [category1, category2, category3],
    },
    rendering: {
      componentName: 'Rendering',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
    },
  },
};
