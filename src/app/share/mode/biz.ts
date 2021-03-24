export interface Biz {
  Comment: string;
  CreatedAt: string;
  DisplayName: string;
  ID: number;
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
