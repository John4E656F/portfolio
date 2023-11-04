import type { Asset, Entry, EntryFields } from 'contentful';

export interface TypeCaseStudyFields {
  contentTypeId: 'caseStudy';
  fields: {
    title?: EntryFields.Symbol;
    subTitle?: EntryFields.Symbol;
    client?: EntryFields.Symbol;
    description?: EntryFields.RichText;
    why?: EntryFields.RichText;
    problem?: EntryFields.RichText;
    solution?: EntryFields.RichText;
    challenge?: EntryFields.RichText;
    technologiesUsed?: EntryFields.Symbol[];
    featuredImage?: Asset;
    screenshots?: Asset[];
  };
}

export type TypeCaseStudy = Entry<TypeCaseStudyFields>;
