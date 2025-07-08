// Interfaces
export interface Confession {
  id: number;
  message: string;
  category: string;
  emotion: string;
  is_approved: boolean;
  created_at: string;
  updated_at: string;
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