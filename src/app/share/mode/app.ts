import {User} from './biz';

export interface App {
  ID: number;
  Comment: string;
  CreatedAt: string;
  DisplayName: string;
  InstanceTemplate: AppInstance;
  Level: string;
  Name: string;
  UpdatedAt: string;
  AppMembers: AppMember[];
  Hosts: AppHost[];
  Owner: User;
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
  Apps: App[];
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
  InnerIP: string;
  Memory: number;
  OsBit: string;
  OsName: string;
  OsType: string;
  OsVersion: string;
  State: string;
  UpdatedAt: string;
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

export interface AppReplicaSet {
  Cluster: AppCluster;
  Comment: string;
  CreatedAt: string;
  ID: number;
  InstanceTemplate: AppInstance;
  LogicIdcEnv: AppLogicIdcEnv;
  UpdatedAt: string;
}

export interface AppLogicIdcEnv {
  Comment: string;
  CreatedAt: string;
  EnvVars: [{Name: string; Value: string}];
  ID: number;
  UpdatedAt: string;
  DisplayName: string;
  Name: string;
}
export interface LogicIdcEnvResponse {
  Comment: string;
  CreatedAt: string;
  Env: AppLogicIdcEnv;
  EnvVars: [{Name: string; Value: string}];
  ID: number;
  LogicIdc: AppLogicIdcEnv;
  UpdatedAt: string;
}

export interface NodeTree {
  title: string;
  key: string;
  icon?: string;
  isLeaf?: boolean;
  checked?: boolean;
  selected?: boolean;
  selectable?: boolean;
  disabled?: boolean;
  disableCheckbox?: boolean;
  expanded?: boolean;
  children?: NodeTree[];
}
