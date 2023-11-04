import { TypeWorkListSkeleton } from '@/types/contentful';
import { Entry } from 'contentful';
import { contentfulClient } from './';
import { ContentImage, parseContentfulContentImage } from './contentfulImage';

type WorkListEntry = Entry<TypeWorkListSkeleton, undefined, string>;

export interface WorkList {
  title: string;
  subTitle: string;
  featuredImage: ContentImage | null;
  technologiesUsed: string[];
  websiteLink: string;
  githubLink: string;
  right: boolean;
}

export function parseContentfulWorkList(workListEntry?: WorkListEntry): WorkList | null {
  if (!workListEntry) {
    return null;
  }

  return {
    title: workListEntry.fields.title || '',
    subTitle: workListEntry.fields.subTitle || '',
    featuredImage: parseContentfulContentImage(workListEntry.fields.featuredImage),
    technologiesUsed: workListEntry.fields.technologiesUsed || [],
    websiteLink: workListEntry.fields.websiteLink || '',
    githubLink: workListEntry.fields.githubLink || '',
    right: workListEntry.fields.right || false,
  };
}

interface FetchWorkListOptions {
  preview: boolean;
}

export async function fetchWorkList({ preview }: FetchWorkListOptions): Promise<WorkList[]> {
  const contentful = contentfulClient({ preview });
  const workListResult = await contentful.getEntries<TypeWorkListSkeleton>({
    content_type: 'workList',
  });

  return workListResult.items.map((workListEntry) => parseContentfulWorkList(workListEntry) as WorkList);
}
