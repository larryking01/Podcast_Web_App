export interface Playlists{
    status: string;
    data: Array<{
        id: number;
        name: string;
        description: string;
        created_at: string;
        updated_at: string;
    }>;
    meta: {
        total: number;
        page: number;
        last_page: number;
    };
}

export interface createPlaylist {
    name: string;
    description: string;
}

export interface PlaylistResponse {
    status: string;
    data: {
        id: number;
        name: string;
        description: string;
        created_at: string;
        updated_at: string;
    };
}

export interface addEpisodeToPlaylist {
    episode_ids: number[];
}

export interface PlaylistEpisodeResponse {
    status: string;
    message: string;
    data: {
        playlist_id: number;
        added_episode_ids: number[];
    };
}

export interface singlePlaylistResponse{
    status: string;
    data: {
        id: number;
        name: string;
        description: string;
        created_at: string;
        updated_at: string;
        episodes: Array<{
            id: number;
            title: string;
            description: string;
            duration: string;
            posted_on: string;
        }>;
    };

}

    export interface EditPlaylist {
        name: string;
        description: string;
    }

export interface EditPlaylistResponse {
    status: string;
    data: {
        id: number;
        name: string;
        description: string;
        created_at: string;
        updated_at: string;
    };
}

  export interface DeletPlaylistResponse {
        name: string;
        message: string;
    }


