export interface AdminCredentials {
  email: string;
  password: string;
    
}
export interface AdminLoginResponse {
  success: boolean;
  message: string;
  token?: string;
}  

export interface AdminSigup{
name: string;
email: string;
password: string;
password_confirmation: string;
role: string;
} 

export interface AdminSigupResponse {
message: string;
user: {
    id: number;
    name: string;
    email: string;
    role: string;
};
}