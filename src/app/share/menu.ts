import {Injectable} from '@angular/core';

export interface MenuItem {
  id: string;
  name: string;
  icon: string;
  level?: number;
  subMenu?: MenuItem[];
}

const BIZ = 'biz';
const APP = 'app';
const ALL_BIZ_MENUS: MenuItem[] = [
    {
      id: 'index',
      name: '业务总览',
      icon: 'read',
      level: 1,
    },
    {
      id: 'members',
      name: '业务成员',
      icon: 'team',
      level: 1,
    },
    {
      id: 'setup',
      name: '设置',
      icon: 'setting',
      level: 1,
      subMenu: [
        {
          id: 'set-information',
          name: '基本信息',
          icon: 'form',
          level: 2,
        },
        {
          id: 'app-settings',
          name: '应用设置',
          icon: 'appstore',
          level: 2,
        },
      ],
    },
    {
      id: 'host-details',
      name: '机器详情',
      icon: 'desktop',
      level: 1,
    },
  ];
const ALL_APP_MENUS: MenuItem[] = [
  {
    id: 'index',
    name: '应用总览',
    icon: 'read',
    level: 1,
  },
  {
    id: 'members',
    name: '应用成员',
    icon: 'team',
    level: 1,
  },
  {
    id: 'setup',
    name: '应用设置',
    icon: 'setting',
    level: 1,
    subMenu: [
      {
        id: 'set-information',
        name: '基本信息',
        icon: 'form',
        level: 2,
      },
      {
        id: 'set-cluster',
        name: '集群设置',
        icon: 'appstore',
        level: 2,
      },
      {
        id: 'cluster-edit',
        name: '集群编辑',
        icon: 'edit',
        level: 2,
      },
      {
        id: 'cluster-instance',
        name: '实例配置',
        icon: 'highlight',
        level: 2,
      }
    ],
  },
  {
    id: 'host-details',
    name: '机器详情',
    icon: 'desktop',
    level: 1,
  },
];

@Injectable({
  providedIn: 'root'
})
export class Menu {
  getItems(section: string): MenuItem[] {
    if (section === BIZ) {
      return ALL_BIZ_MENUS;
    }
    if (section === APP) {
      return ALL_APP_MENUS;
    }
    return [];
  }
}
