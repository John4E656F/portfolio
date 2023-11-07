import { TypeCaseStudySkeleton } from '@/types/contentful';
import { Entry } from 'contentful';
import { Document as RichTextDocument } from '@contentful/rich-text-types';
import { contentfulClient } from './';
import { ContentImage, parseContentfulContentImage, parseContentfulContentImagesArray } from './contentfulImage';

type CaseStudyEntry = Entry<TypeCaseStudySkeleton, undefined, string>;

export interface CaseStudy {
  title: string;
  subTitle: string;
  tags: string[];
  programmingLanguage: string[];
  overview: RichTextDocument | null;
  problem: RichTextDocument | null;
  solution: RichTextDocument | null;
  skillSet: string[];
  techUsed: string[];
  uiStrategy: string;
  uiImage: ContentImage[] | null;
  uxStrategy: RichTextDocument | null;
  uxImage: ContentImage[] | null;
  development: RichTextDocument | null;
  featuredImage: ContentImage | null;
  screenshots: ContentImage[] | null;
  websiteLink: string;
  githubLink: string;
}

export function parseContentfulCaseStudy(caseStudyEntry?: CaseStudyEntry): CaseStudy | null {
  if (!caseStudyEntry) {
    return null;
  }

  return {
    title: caseStudyEntry.fields.title || '',
    subTitle: caseStudyEntry.fields.subTitle || '',
    tags: caseStudyEntry.fields.tags || [],
    programmingLanguage: caseStudyEntry.fields.programmingLanguage || [],
    overview: caseStudyEntry.fields.overview || null,
    problem: caseStudyEntry.fields.problem || null,
    solution: caseStudyEntry.fields.solution || null,
    skillSet: caseStudyEntry.fields.skillSet || [],
    techUsed: caseStudyEntry.fields.technologiesUsed || [],
    uiStrategy: caseStudyEntry.fields.uiStrategy || '',
    uiImage: parseContentfulContentImagesArray(caseStudyEntry.fields.uiImage),
    uxStrategy: caseStudyEntry.fields.uxStrategy || null,
    uxImage: parseContentfulContentImagesArray(caseStudyEntry.fields.uxImage),
    development: caseStudyEntry.fields.development || null,
    featuredImage: parseContentfulContentImage(caseStudyEntry.fields.featuredImage),
    screenshots: parseContentfulContentImagesArray(caseStudyEntry.fields.screenshots),
    websiteLink: caseStudyEntry.fields.websiteLink || '',
    githubLink: caseStudyEntry.fields.githubLink || '',
  };
}

interface CaseStudyOptions {
  preview: boolean;
  id: string;
}

export async function fetchCaseStudy({ preview, id }: CaseStudyOptions): Promise<CaseStudy> {
  const contentful = contentfulClient({ preview });
  const caseStudyResult = await contentful.getEntries<TypeCaseStudySkeleton>({
    content_type: 'caseStudy',
    'sys.id': id,
    include: 2,
  });

  console.log(caseStudyResult);

  return parseContentfulCaseStudy(caseStudyResult.items[0])!;
}
