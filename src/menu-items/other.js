// assets
import { IconBrandChrome, IconHelp, IconSitemap } from '@tabler/icons';

// constant
const icons = {
    IconBrandChrome: IconBrandChrome,
    IconHelp: IconHelp,
    IconSitemap: IconSitemap
};

//-----------------------|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||-----------------------//

export const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'documentation',
            title: 'Documentation',
            type: 'item',
            url: 'https://github.com/farmacomp/',
            icon: icons['IconHelp'],
            external: true,
            target: true
        }
    ]
};
