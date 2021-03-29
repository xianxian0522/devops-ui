export interface App {
  ID: number;
}

export interface AppMember {
  ID: number;
  CreatedAt: string;
  Role: string;
  UpdatedAt: string;
  UserID: number;
  UserRealName: string;
  Username: string;
}

export interface AppCluster {
  ID: number;
  Comment: string;
  Name: string;
}
