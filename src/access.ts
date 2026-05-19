import type { IInitialState } from './services/base/typing';

/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: IInitialState | undefined) {
    const currentUser = initialState?.currentUser as any;

    return {
        isCustomer: !!(currentUser && currentUser.role === 'customer'),
        isStaff: !!(currentUser && currentUser.role === 'staff'),
        isAdmin: !!(currentUser && currentUser.role === 'admin'),
    };
}