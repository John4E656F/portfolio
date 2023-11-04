import type { Asset, Entry, EntryFields } from 'contentful';

export interface TypePortfolioFields {
  contentTypeId: 'portfolio';
  fields: {
    id: EntryFields.Integer;
    title?: EntryFields.Symbol;
    subTitle?: EntryFields.Symbol;
    featuredImage?: Asset;
    technologiesUsed?: EntryFields.Symbol[];
    websiteLink?: EntryFields.Symbol;
    githubLink?: EntryFields.Symbol;
    right?: EntryFields.Boolean;
  };
}

export type TypePortfolio = Entry<TypePortfolioFields>;
