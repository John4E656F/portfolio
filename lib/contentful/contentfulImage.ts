import { Asset, AssetLink } from 'contentful';

export interface ContentImage {
  title: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export function parseContentfulContentImage(asset?: Asset<undefined, string> | { sys: AssetLink }): ContentImage | null {
  if (!asset) {
    return null;
  }

  if (!('fields' in asset)) {
    return null;
  }

  return {
    title: asset.fields.title || '',
    src: asset.fields.file?.url || '',
    alt: asset.fields.description || '',
    width: asset.fields.file?.details.image?.width || 0,
    height: asset.fields.file?.details.image?.height || 0,
  };
}

export function parseContentfulContentImagesArray(assets?: (Asset<undefined, string> | { sys: AssetLink })[] | null): ContentImage[] | null {
  if (!assets || assets.length === 0) {
    return null;
  }

  const parsedImages: (ContentImage | null)[] = assets.map((asset) => {
    if (!asset) {
      return null;
    }

    if (!('fields' in asset)) {
      return null;
    }

    return {
      title: asset.fields.title || '',
      src: asset.fields.file?.url || '',
      alt: asset.fields.description || '',
      width: asset.fields.file?.details.image?.width || 0,
      height: asset.fields.file?.details.image?.height || 0,
    };
  });

  // Filter out any potential null values
  return parsedImages.filter((image) => image !== null) as ContentImage[];
}
