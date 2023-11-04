import * as contentful from 'contentful';
import { TypeWorkList } from '@/types/contentful';

export const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE || '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVER_API || '',
});

export const getAllWorkList = async () => {
  const response = await client.getEntries<TypeWorkList>({
    content_type: 'workList',
  });

  return response.items;
};
