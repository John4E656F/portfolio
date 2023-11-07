import { Document as RichTextDocument } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

type RichTextProps = {
  document: RichTextDocument | null;
};

export function RichText({ document }: RichTextProps) {
  if (!document) {
    return null;
  }

  return <div className='flex flex-col gap-5'>{documentToReactComponents(document)}</div>;
}
