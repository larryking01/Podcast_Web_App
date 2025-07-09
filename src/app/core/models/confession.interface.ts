// Interfaces
export interface Confession {
status: string;
data: {
    id: number;
    message: string;
    category: string;
    emotion: string;
    is_approved: string;
    // Add other properties if present in the objects
}[];
meta: {
    total: number;
    page: number;
    last_page: number;
};
}

export interface AddConfessionRequest {
  message: string;
  category: string;
  emotion: string;
}

export interface ConfessionResponse {
  message: string;
  confession: Confession;
}

export interface GetConfessionResponse {
  status: string;
  data: {
    id: number;
    content: string;
    is_approved: boolean;
  };
}

export interface DeleteConfessionResponse {
  status: string;
  message: string;
}

export interface ToggleApprovalResponse {
  status: string;
  message: string;
  data: {
    id: number;
    content: string;
    is_approved: boolean;
  };
}