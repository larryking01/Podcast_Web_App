// Interfaces
export interface Episode {
  id: number;
  title: string;
  description: string;
  img_url: string;
  audio_url: string;
  duration: string;
  posted_on: string;
  season: number;
  episode: number;
  spotify_url?: string;
  apple_podcasts_url?: string;
  anchor_podcast?: string;
  google_podcasts?: string;
  archive: number;
  featured: number;
  slug: string;
  created_at?: string;
  updated_at?: string;
}

export interface EpisodeMeta {
  total: number;
  page: number;
  last_page: number;
}

export interface EpisodeResponse {
  status: string;
  // data: Episode | Episode[];
  data: Episode [];
  meta?: EpisodeMeta;
  message?: string;
}

export interface CreateEpisodeDto {
  title: string;
  description: string;
  img_url: string;
  audio_url: string;
  duration: string;
  posted_on: string;
  season: number;
  episode: number;
  spotify_url?: string;
  apple_podcasts_url?: string;
  anchor_podcast?: string;
  google_podcasts?: string;
  archive: number;
  featured: number;
  slug: string;
}