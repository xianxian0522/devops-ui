import {Injectable} from '@angular/core';

export interface MenuItem {
  id: string;
  name: string;
  icon: string;
  subMenu?: MenuItem[];
}

const BIZ = 'biz';
const ALL_BIZ_MENUS: MenuItem[] = [
    {
      id: 'biz',
      name: '业务总览',
      icon: 'read',
    },
    {
      id: 'member',
      name: '成员',
      icon: 'team',
    },
    {
      id: 'setup',
      name: '设置',
      icon: 'setting',
      subMenu: [
        {
          id: 'information',
          name: '基本信息',
          icon: 'form',
        },
        {
          id: 'app-settings',
          name: '应用设置',
          icon: 'appstore',
        },
      ],
    },
    {
      id: 'host-details',
      name: '机器详情',
      icon: '',
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
    return [];
  }
}
