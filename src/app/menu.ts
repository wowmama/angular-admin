import { Menu } from './ione/models/menu.model';

export const MENUS: Menu[] = [
  {
    uuid: '42500994-a9ac-4216-a56c-94b6e07aada2',
    name: 'UI Services',
    icon: 'fa fa-bank',
    subMenus: [
      {
        uuid: 'afce25e8-739e-4592-9af0-7b0c146e7cc5',
        name: 'Loading',
        link: ['pages', 'ui-services', 'loading'],
      },
      {
        uuid: 'bc14d4fe-3662-429c-b22d-14f33baf0540',
        name: 'Toast',
        link: ['pages', 'ui-services', 'toast']
      },
      {
        uuid: '9a742b4f-b916-4764-b8e3-e6a9df7ccbdc',
        name: 'Alert',
        link: ['pages', 'ui-services', 'alert'],
      },
    ]
  },
  {
    uuid: 'DE55EABC-70D9-4846-BE09-B594493A22ED',
    name: '多层菜单',
    icon: 'fa fa-bars',
    subMenus: [
      {
        uuid: '3f25c868-95e0-4008-b256-026de360ae0c',
        name: '一级菜单1',
        link: ['/pages/userRelations'],
      },
      {
        uuid: '5bf5e808-1d9a-47b9-b823-61ad9ae44b47',
        name: '一级菜单2',
        link: ['/pages/roleRelations'],
      },
      {
        uuid: 'dce47624-0410-44d2-aa74-9025429fff46',
        name: '一级菜单3',
        icon: 'fa fa-bars',
        subMenus: [
          {
            uuid: 'bb8b8ad6-e7a9-47ca-b00d-859ca57187aa',
            name: '二级菜单1',
            link: ['/pages/roleManage'],
          },
          {
            uuid: '2738cee7-5545-4371-b2ec-3fd37a2aac1d',
            name: '二级菜单2',
            link: ['/pages/employees'],
          },
          {
            uuid: '1bb11ccf-a73e-49df-8d79-33fbb8bfbe6b',
            name: '二级菜单3',
            icon: 'fa fa-bars',
            subMenus: [
              {
                uuid: '343b50e9-4f5d-4357-9934-ee4d43adfc37',
                name: '三级菜单1',
                link: ['/pages/roleManage'],
              },
              {
                uuid: 'c459fbd5-477e-49a0-a683-ed429c616eb4',
                name: '三级菜单2',
                link: ['/pages/employees'],
              },
              {
                uuid: '8a239b1a-9ffb-4f82-85bc-d3dd6a6ef5c7',
                name: '三级菜单3',
                link: ['/pages/employees'],
              },
            ]
          },
        ]
      }
    ]
  },

];
