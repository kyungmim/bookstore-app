export interface OpenLibraryResponse {
  docs: OpenLibraryBook[];
  documentation_url: string;
  numFound: number;
  numFoundExact: boolean;
  num_found: number;
  offset: number | null;
  q: string;
  start: number;
}

export interface OpenLibraryBook {
  author_key: string[];
  author_name: string[];
  cover_edition_key: string;
  cover_i: number;
  edition_count: number;
  first_publish_year: number;
  has_fulltext: boolean;
  ia: string[];
  ia_collection_s: string[];
  key: string;
  language: string[];
  lending_edition_s: string;
  lending_identifier_s: string;
  public_scan_b: boolean;
  title: string;
}

export interface Author {
  author: { key: string };
  type: { key: string };
}

export interface Link {
  title: string;
  url: string;
  type: { key: string };
}

export interface Excerpt {
  excerpt: string;
  comment: string;
  author: { key: string };
}

export interface OpenLibraryBookDetail {
  title: string;
  covers: number[];
  key: string;
  authors: Author[];
  type: { key: string };
  description: { type: string; value: string };
  links: Link[];
  subject_places: string[];
  subjects: string[];
  subject_people: string[];
  excerpts: Excerpt[];
  subject_times: string[];
  latest_revision: number;
  revision: number;
  created: { type: string; value: string };
  last_modified: { type: string; value: string };
}
