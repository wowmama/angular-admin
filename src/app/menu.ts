import { Menu } from './ione/models/menu.model';

export const MENUS: Menu[] = [
  {
    uuid: '1',
    name: 'UI Services',
    icon: 'fa fa-bank',
    subMenus: [
      {
        uuid: '1-1',
        name: 'Loading',
        link: ['pages', 'ui-services', 'loading'],
      },
      {
        uuid: '1-2',
        name: 'Toast',
        link: ['pages', 'ui-services', 'toast']
      },
      {
        uuid: '1-3',
        name: 'Alert',
        link: ['pages', 'ui-services', 'alert'],
      },
    ]
  },
  {
    uuid: '2',
    name: '营销活动管理',
    icon: 'fa fa-bank',
    subMenus: [
      {
        uuid: '2-1',
        name: '营销活动维护',
        link: ['pages', 'marketing-activities-management', 'market-activites'],
      },
    ]
  },
  {
    uuid: '3',
    name: '多层菜单',
    icon: 'fa fa-bars',
    subMenus: [
      {
        uuid: '3-1',
        name: '一级菜单1',
        link: ['/'],
      },
      {
        uuid: '3-2',
        name: '一级菜单2',
        link: ['/'],
      },
      {
        uuid: '3-3',
        name: '一级菜单3',
        icon: 'fa fa-bars',
        subMenus: [
          {
            uuid: '3-3-1',
            name: '二级菜单1',
            link: ['/'],
          },
          {
            uuid: '3-3-2',
            name: '二级菜单2',
            link: ['/'],
          },
          {
            uuid: '3-3-3',
            name: '二级菜单3',
            icon: 'fa fa-bars',
            subMenus: [
              {
                uuid: '3-3-3-1',
                name: '三级菜单1',
                link: ['/'],
              },
              {
                uuid: '3-3-3-2',
                name: '三级菜单2',
                link: ['/'],
              },
              {
                uuid: '3-3-3-3',
                name: '三级菜单3',
                link: ['/'],
              },
            ]
          },
        ]
      }
    ]
  },

];
