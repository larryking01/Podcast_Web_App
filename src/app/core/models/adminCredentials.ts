export interface AdminCredentials {
  email: string;
  password: string;
    
}
export interface AdminLoginResponse {
  success: boolean;
  message: string;
  token?: string;
}  