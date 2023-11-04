import * as contentful from 'contentful';

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVER_API!,
});

const previewClient = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_API!,
  host: 'preview.contentful.com',
});

export function contentfulClient({ preview = false }) {
  if (preview) {
    return previewClient;
  }

  return client;
}
