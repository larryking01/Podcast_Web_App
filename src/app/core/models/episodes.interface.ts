export interface Episodes {
    status: string;
    data: Array<{
        id: number;
        title: string;
        description: string;
        img_url: string;
        audio_url: string;
        duration: string;
        posted_on: string;
        season: number;
        episode: number;
        spotify_url: string;
        apple_podcasts_url: string;
        archive: number;
        featured: number;
        slug: string;
        created_at: string;
        updated_at: string;
    }>;
    meta: {
        total: number;
        page: number;
        last_page: number;
    };
}

export interface createEpisode{
    title: string;
    description: string;
    img_url: string;
    audio_url: string;
    duration: string;
    posted_on: string;
    season: number;
    episode: number;
    spotify_url: string;
    apple_podcasts_url: string;
    archive: number;
    featured: number;
    slug: string;
}

export interface EpisodeResponse {
    status: string;
    data: {
        id: number;
        title: string;
        description: string;
        img_url: string;
        audio_url: string;
        duration: string;
        posted_on: string;
        season: number;
        episode: number;
        anchor_podcast: string;
        apple_podcasts: string;
        google_podcasts: string;
        archive: number;
        featured: number;
        slug: string;
    };

}


    export interface message{
        status: string;
        message: string;
    }