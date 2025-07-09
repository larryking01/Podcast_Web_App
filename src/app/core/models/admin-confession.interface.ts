// src/app/core/models/admin-confession.interface.ts

export interface AdminConfession {
  id: number;
  message: string;
  category: string;
  emotion: string;
  is_approved: string; // Keep as string as per provided data
  created_at: string;
  updated_at: string;
}

export interface AdminConfessionResponse {
  status: string;
  data: AdminConfession[];
  meta: {
    total: number;
    page: number;
    last_page: number;
  };
}