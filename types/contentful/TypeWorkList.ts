import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeWorkListFields {
    title: EntryFieldTypes.Symbol;
    subTitle: EntryFieldTypes.Symbol;
    featuredImage: EntryFieldTypes.AssetLink;
    technologiesUsed?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    websiteLink: EntryFieldTypes.Symbol;
    githubLink: EntryFieldTypes.Symbol;
    right: EntryFieldTypes.Boolean;
    featured?: EntryFieldTypes.Boolean;
    reference?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
}

export type TypeWorkListSkeleton = EntrySkeletonType<TypeWorkListFields, "workList">;
export type TypeWorkList<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeWorkListSkeleton, Modifiers, Locales>;
