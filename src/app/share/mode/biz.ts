export interface Biz {
  Comment: string;
  CreatedAt: string;
  DisplayName: string;
  ID: number;
  Name: string;
  UpdatedAt: string;
}

export interface BizApp {
  Comment: string;
  CreatedAt: string;
  DisplayName: string;
  ID: number;
  InstanceTemplate: {[key: string]: any};
  Level: string;
  Name: string;
  UpdatedAt: string;
}

export interface BizHost {
  CPU: number;
  Comment: string;
  CreatedAt: string;
  Disk: [
    {
      Device: string;
      FsType: string;
      MountPoint: string;
      SizeGB: number;
    }
  ];
  Hostname: string;
  ID: number;
  InnerIP: string;
  Memory: number;
  OsName: string;
  OsType: string;
  OsVersion: string;
  State: string;
  UpdatedAt: string;
}

export interface BizMember {
  ID: number;
  CreatedAt: string;
  Role: string;
  UpdatedAt: string;
  UserID: number;
  UserRealName: string;
  Username: string;
}

export interface User {
  CreatedAt: string;
  DingTalkUserID: string;
  ID: number;
  Mail: string;
  Password: string;
  RealName: string;
  State: string;
  UpdatedAt: string;
  Username: string;
}

export interface BizDetails {
  Apps: BizApp[];
  Comment: string;
  CreatedAt: string;
  DisplayName: string;
  Hosts: BizHost[];
  ID: number;
  Name: string;
  Owner: User;
  UpdatedAt: string;
}
