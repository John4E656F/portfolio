import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeCaseStudyFields {
    title?: EntryFieldTypes.Symbol;
    subTitle?: EntryFieldTypes.Symbol;
    tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    programmingLanguage?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    overview?: EntryFieldTypes.Text;
    problem?: EntryFieldTypes.RichText;
    solution?: EntryFieldTypes.RichText;
    skillSet?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    technologiesUsed?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    uiux?: EntryFieldTypes.Text;
    uxImage?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    development?: EntryFieldTypes.RichText;
    featuredImage?: EntryFieldTypes.AssetLink;
    screenshots?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    reference?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
    websiteLink?: EntryFieldTypes.Symbol;
    githubLink?: EntryFieldTypes.Symbol;
}

export type TypeCaseStudySkeleton = EntrySkeletonType<TypeCaseStudyFields, "caseStudy">;
export type TypeCaseStudy<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeCaseStudySkeleton, Modifiers, Locales>;
