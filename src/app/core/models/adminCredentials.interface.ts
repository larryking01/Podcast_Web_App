export interface AdminCredentials {
  email: string;
  password: string;
    
}


export interface AdminLoginResponse {
  status: string;
  message: string;
  data: {
    token: string;
    user: {
      id: number;
      name: string;
      email: string;
      role: string;
      created_at: string;
      updated_at: string;
      email_verified_at: string | null;
    };
  };
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