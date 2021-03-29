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
  InstanceTemplate: AppInstance;
}

export interface AppHost {
  ID: number;
}

export interface AppInstance {
  BindInfos: [
    {
      Ip: string;
      Name: string;
      Port: number;
      Protocol: string;
    }
  ];
  Comment: string;
  DataDir: string;
  EnvVars: [
    {
      Name: string;
      Value: string;
    }
  ];
  LogDir: string;
  MetricEndpoint: string;
  User: string;
  WorkDir: string;
  Name: string;
  State: string;
}
