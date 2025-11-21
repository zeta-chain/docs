// 导入所有 _meta.json 文件
// Root
import enMetaRoot from '../../pages/_meta.en-US.json';
import zhMetaRoot from '../../pages/_meta.zh-CN.json';

// Start
import enMetaStart from '../../pages/start/_meta.en-US.json';
import zhMetaStart from '../../pages/start/_meta.zh-CN.json';

// About
import enMetaAbout from '../../pages/about/_meta.en-US.json';
import zhMetaAbout from '../../pages/about/_meta.zh-CN.json';
import enMetaAboutTokenUtility from '../../pages/about/token-utility/_meta.en-US.json';
import zhMetaAboutTokenUtility from '../../pages/about/token-utility/_meta.zh-CN.json';
import enMetaAboutServices from '../../pages/about/services/_meta.en-US.json';
import zhMetaAboutServices from '../../pages/about/services/_meta.zh-CN.json';
import enMetaAboutInfo from '../../pages/about/info/_meta.en-US.json';
import zhMetaAboutInfo from '../../pages/about/info/_meta.zh-CN.json';

// Developers
import enMetaDevelopers from '../../pages/developers/_meta.en-US.json';
import zhMetaDevelopers from '../../pages/developers/_meta.zh-CN.json';
import enMetaDevelopersArchitecture from '../../pages/developers/architecture/_meta.en-US.json';
import zhMetaDevelopersArchitecture from '../../pages/developers/architecture/_meta.zh-CN.json';
import enMetaDevelopersChains from '../../pages/developers/chains/_meta.en-US.json';
import zhMetaDevelopersChains from '../../pages/developers/chains/_meta.zh-CN.json';
import enMetaDevelopersProtocol from '../../pages/developers/protocol/_meta.en-US.json';
import zhMetaDevelopersProtocol from '../../pages/developers/protocol/_meta.zh-CN.json';
import enMetaDevelopersStandards from '../../pages/developers/standards/_meta.en-US.json';
import zhMetaDevelopersStandards from '../../pages/developers/standards/_meta.zh-CN.json';
import enMetaDevelopersTutorials from '../../pages/developers/tutorials/_meta.en-US.json';
import zhMetaDevelopersTutorials from '../../pages/developers/tutorials/_meta.zh-CN.json';
import enMetaDevelopersEvm from '../../pages/developers/evm/_meta.en-US.json';
import zhMetaDevelopersEvm from '../../pages/developers/evm/_meta.zh-CN.json';

// Nodes
import enMetaNodes from '../../pages/nodes/_meta.en-US.json';
import zhMetaNodes from '../../pages/nodes/_meta.zh-CN.json';
import enMetaNodesStartHere from '../../pages/nodes/start-here/_meta.en-US.json';
import zhMetaNodesStartHere from '../../pages/nodes/start-here/_meta.zh-CN.json';
import enMetaNodesValidate from '../../pages/nodes/validate/_meta.en-US.json';
import zhMetaNodesValidate from '../../pages/nodes/validate/_meta.zh-CN.json';

// Reference
import enMetaReference from '../../pages/reference/_meta.en-US.json';
import zhMetaReference from '../../pages/reference/_meta.zh-CN.json';
import enMetaReferenceNetwork from '../../pages/reference/network/_meta.en-US.json';
import zhMetaReferenceNetwork from '../../pages/reference/network/_meta.zh-CN.json';

// Users
import enMetaUsers from '../../pages/users/_meta.en-US.json';
import zhMetaUsers from '../../pages/users/_meta.zh-CN.json';
import enMetaUsersCli from '../../pages/users/cli/_meta.en-US.json';
import zhMetaUsersCli from '../../pages/users/cli/_meta.zh-CN.json';
import enMetaUsersCliGovernance from '../../pages/users/cli/governance/_meta.en-US.json';
import zhMetaUsersCliGovernance from '../../pages/users/cli/governance/_meta.zh-CN.json';
import enMetaUsersKeplr from '../../pages/users/keplr/_meta.en-US.json';
import zhMetaUsersKeplr from '../../pages/users/keplr/_meta.zh-CN.json';
import enMetaUsersLeap from '../../pages/users/leap/_meta.en-US.json';
import zhMetaUsersLeap from '../../pages/users/leap/_meta.zh-CN.json';
import enMetaUsersPingpub from '../../pages/users/pingpub/_meta.en-US.json';
import zhMetaUsersPingpub from '../../pages/users/pingpub/_meta.zh-CN.json';
import enMetaUsersZetahub from '../../pages/users/zetahub/_meta.en-US.json';
import zhMetaUsersZetahub from '../../pages/users/zetahub/_meta.zh-CN.json';

// 创建 meta 数据映射
type MetaData = Record<string, { title?: string; description?: string } | string>;
type MetaDataMap = Record<string, Record<string, MetaData>>;

export const metaDataMap: MetaDataMap = {
    'en-US': {
        '/': enMetaRoot,
        '/start': enMetaStart,
        '/about': enMetaAbout,
        '/about/token-utility': enMetaAboutTokenUtility,
        '/about/services': enMetaAboutServices,
        '/about/info': enMetaAboutInfo,
        '/developers': enMetaDevelopers,
        '/developers/architecture': enMetaDevelopersArchitecture,
        '/developers/chains': enMetaDevelopersChains,
        '/developers/protocol': enMetaDevelopersProtocol,
        '/developers/standards': enMetaDevelopersStandards,
        '/developers/tutorials': enMetaDevelopersTutorials,
        '/developers/evm': enMetaDevelopersEvm,
        '/nodes': enMetaNodes,
        '/nodes/start-here': enMetaNodesStartHere,
        '/nodes/validate': enMetaNodesValidate,
        '/reference': enMetaReference,
        '/reference/network': enMetaReferenceNetwork,
        '/users': enMetaUsers,
        '/users/cli': enMetaUsersCli,
        '/users/cli/governance': enMetaUsersCliGovernance,
        '/users/keplr': enMetaUsersKeplr,
        '/users/leap': enMetaUsersLeap,
        '/users/pingpub': enMetaUsersPingpub,
        '/users/zetahub': enMetaUsersZetahub,
    },
    'zh-CN': {
        '/': zhMetaRoot,
        '/start': zhMetaStart,
        '/about': zhMetaAbout,
        '/about/token-utility': zhMetaAboutTokenUtility,
        '/about/services': zhMetaAboutServices,
        '/about/info': zhMetaAboutInfo,
        '/developers': zhMetaDevelopers,
        '/developers/architecture': zhMetaDevelopersArchitecture,
        '/developers/chains': zhMetaDevelopersChains,
        '/developers/protocol': zhMetaDevelopersProtocol,
        '/developers/standards': zhMetaDevelopersStandards,
        '/developers/tutorials': zhMetaDevelopersTutorials,
        '/developers/evm': zhMetaDevelopersEvm,
        '/nodes': zhMetaNodes,
        '/nodes/start-here': zhMetaNodesStartHere,
        '/nodes/validate': zhMetaNodesValidate,
        '/reference': zhMetaReference,
        '/reference/network': zhMetaReferenceNetwork,
        '/users': zhMetaUsers,
        '/users/cli': zhMetaUsersCli,
        '/users/cli/governance': zhMetaUsersCliGovernance,
        '/users/keplr': zhMetaUsersKeplr,
        '/users/leap': zhMetaUsersLeap,
        '/users/pingpub': zhMetaUsersPingpub,
        '/users/zetahub': zhMetaUsersZetahub,
    },
};

/**
 * 根据 route 和 locale 获取 meta 标题
 */
// export const getMetaTitle = (route: string, locale: string, pageName?: string): string | null => {
//   const localeMeta = metaDataMap[locale as keyof typeof metaDataMap];
//   if (!localeMeta) return null;

//   // 找到匹配的路径
//   // 例如：/developers/evm -> /developers
//   const segments = route.split('/').filter(Boolean);

//   // 从根路径开始查找
//   for (let i = segments.length; i >= 0; i--) {
//     const path = '/' + segments.slice(0, i).join('/');
//     const meta = localeMeta[path];

//     if (meta && pageName) {
//       // 如果 meta 是对象，获取对应的页面标题
//       const pageMeta = (meta as any)[pageName];
//       if (pageMeta && typeof pageMeta === 'object' && 'title' in pageMeta) {
//         return pageMeta.title;
//       }
//       if (typeof pageMeta === 'string') {
//         return pageMeta;
//       }
//     }
//   }

//   return null;
// };
export const getMetaTitle = (route: string, locale: string, pageName?: string): string | null => {
    const localeMeta = metaDataMap[locale as keyof typeof metaDataMap];
    if (!localeMeta) return null;

    const segments = route.split('/').filter(Boolean);

    // 如果没有传入 pageName，从 route 中提取最后一个 segment
    if (!pageName && segments.length > 0) {
        pageName = segments[segments.length - 1];
    }

    if (!pageName) return null;

    // 策略 1: 先尝试直接匹配当前路径的 meta（用于一级目录）
    // 例如：/start 直接查找 /start 的 meta，pageName 可能是 "index"
    const directMeta = localeMeta[route];
    if (directMeta && typeof directMeta === 'object') {
        const pageMeta = (directMeta as any)[pageName];
        if (pageMeta) {
            if (typeof pageMeta === 'object' && 'title' in pageMeta) {
                return pageMeta.title;
            }
            if (typeof pageMeta === 'string') {
                return pageMeta;
            }
        }
    }

    // 策略 2: 从父路径开始向上查找（用于二级及以上目录）
    // 例如：/developers/evm -> 查找 /developers 的 meta 中的 evm
    // 例如：/start -> 查找 / 的 meta 中的 start
    for (let i = segments.length - 1; i >= 0; i--) {
        const parentPath = '/' + segments.slice(0, i).join('/');
        const parentMeta = localeMeta[parentPath];

        if (parentMeta && typeof parentMeta === 'object') {
            const pageMeta = (parentMeta as any)[pageName];
            if (pageMeta) {
                // 如果 pageMeta 是对象且有 title
                if (typeof pageMeta === 'object' && 'title' in pageMeta) {
                    return pageMeta.title;
                }
                // 如果 pageMeta 是字符串
                if (typeof pageMeta === 'string') {
                    return pageMeta;
                }
            }
        }
    }

    return null;
};