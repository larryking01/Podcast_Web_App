// Interfaces
export interface Playlist {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  episodes?: Episode[];
  imageUrl?: string
}

export interface Episode {
  id: number;
  title: string;
  description: string;
  duration: string;
  posted_on: string;
}

export interface PlaylistsResponse {
  status: string;
  data: {
    current_page: number;
    data: Playlist[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: {
      url: string | null;
      label: string;
      active: boolean;
    }[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
  };
}

export interface PlaylistResponse {
  status: string;
  data: Playlist;
}

export interface CreatePlaylistRequest {
  name: string;
  description: string;
}

export interface AddEpisodesRequest {
  episode_ids: number[];
}

export interface AddEpisodesResponse {
  status: string;
  message: string;
  data: {
    playlist_id: number;
    added_episode_ids: number[];
  };
}

export interface UpdatePlaylistRequest {
  name: string;
  description: string;
}

export interface DeletePlaylistResponse {
  status: string;
  message: string;
}