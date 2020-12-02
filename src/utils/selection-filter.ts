import { TargetCategoryType } from './../hooks/useContent';

type DocumentProps = {
  description: string;
  docId: string;
  genre: string;
  id: string;
  maturity: string;
  slug: string;
  title: string;
};

interface FilterInputProps {
  series: DocumentProps[];
  films: DocumentProps[];
}

type CategoryOutputProps = {
  title: string;
  data: DocumentProps[];
};

export type FilterOutputProps = {
  [Key in TargetCategoryType]: CategoryOutputProps[];
};

export default function selectionFilter({
  series,
  films,
}: FilterInputProps): FilterOutputProps {
  return {
    series: [
      {
        title: 'Documentaries',
        data: series?.filter((item: any) => item.genre === 'documentaries'),
      },
      {
        title: 'Comedies',
        data: series?.filter((item: any) => item.genre === 'comedies'),
      },
      {
        title: 'Children',
        data: series?.filter((item: any) => item.genre === 'children'),
      },
      {
        title: 'Crime',
        data: series?.filter((item: any) => item.genre === 'crime'),
      },
      {
        title: 'Feel Good',
        data: series?.filter((item: any) => item.genre === 'feel-good'),
      },
    ],
    films: [
      {
        title: 'Drama',
        data: films?.filter((item: any) => item.genre === 'drama'),
      },
      {
        title: 'Thriller',
        data: films?.filter((item: any) => item.genre === 'thriller'),
      },
      {
        title: 'Children',
        data: films?.filter((item: any) => item.genre === 'children'),
      },
      {
        title: 'Suspense',
        data: films?.filter((item: any) => item.genre === 'suspense'),
      },
      {
        title: 'Romance',
        data: films?.filter((item: any) => item.genre === 'romance'),
      },
    ],
  };
}
