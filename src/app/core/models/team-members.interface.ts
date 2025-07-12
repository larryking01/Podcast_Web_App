// Interfaces
export interface SocialMediaLink {
  id?: number;
  platform: string;
  url: string;
}

export interface TeamMember {
  id?: number;
  name: string;
  role: string;
  bio: string;

  profile_image: string | null;
  social_media_links: SocialMediaLink[];
  'created-at'?: string;
  'updated-at'?: string;

}

export interface TeamMembersListResponse {
  status: string;
  data: TeamMember[];
  meta: {
    total: number;
    page: number;
    last_page: number;
  };
}

export interface TeamMemberResponse {
  status: string;
  data: TeamMember;
  message?: string;
}

export interface DeleteResponse {
  status: string;
  message: string;
}