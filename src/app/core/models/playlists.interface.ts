// Interfaces
export interface Playlist {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  episodes?: Episode[];
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
  data: Playlist[];
  meta: {
    total: number;
    page: number;
    last_page: number;
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