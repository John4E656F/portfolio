import * as contentful from 'contentful';

export interface TypeWorkListFields {
  contentTypeId: 'workList';
  fields: {
    title: contentful.EntryFieldTypes.Symbol;
    subTitle: contentful.EntryFieldTypes.Symbol;
    featuredImage: contentful.EntryFieldTypes.AssetLink;
    technologiesUsed?: contentful.EntryFieldTypes.Symbol[];
    websiteLink: contentful.EntryFieldTypes.Symbol;
    githubLink: contentful.EntryFieldTypes.Symbol;
    right: contentful.EntryFieldTypes.Boolean;
  };
}

export interface TypeWorkList extends contentful.Entry<TypeWorkListFields> {}
