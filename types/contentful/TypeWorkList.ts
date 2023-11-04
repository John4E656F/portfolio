import * as contentful from 'contentful';

export type EntrySkeleton = {
  contentTypeId: 'workList';
  fields: {
    categoryName: contentful.EntryFieldTypes.Text;
  };
};

export interface TypeWorkListFields {
  contentTypeId: 'workList';
  fields: {
    title?: contentful.EntryFieldTypes.Symbol;
    subTitle?: contentful.EntryFieldTypes.Symbol;
    featuredImage?: contentful.EntryFieldTypes.AssetLink;
    technologiesUsed?: contentful.EntryFieldTypes.Symbol[];
    websiteLink?: contentful.EntryFieldTypes.Symbol;
    githubLink?: contentful.EntryFieldTypes.Symbol;
    right?: contentful.EntryFieldTypes.Boolean;
  };
}

// export type TypeWorkList = EntrySkeleton<TypeWorkListFields>;
