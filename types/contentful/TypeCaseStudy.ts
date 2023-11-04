import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeCaseStudyFields {
    title?: EntryFieldTypes.Symbol;
    subTitle?: EntryFieldTypes.Symbol;
    client?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    why?: EntryFieldTypes.RichText;
    problem?: EntryFieldTypes.RichText;
    solution?: EntryFieldTypes.RichText;
    challenge?: EntryFieldTypes.RichText;
    technologiesUsed?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    featuredImage?: EntryFieldTypes.AssetLink;
    screenshots?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export type TypeCaseStudySkeleton = EntrySkeletonType<TypeCaseStudyFields, "caseStudy">;
export type TypeCaseStudy<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeCaseStudySkeleton, Modifiers, Locales>;
