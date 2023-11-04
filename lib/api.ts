import * as contentful from 'contentful';
import { TypePortfolio } from '@/types';

export const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE || '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVER_API || '',
});

export const getAllWorkList = async () => {
  const response = await client.getEntries<TypePortfolio>({
    content_type: 'portfolio',
  });

  return response.items;
};
