import type { IInitialState } from './services/base/typing';
import { UserRole } from '@/models/quanlycomrang/users';

/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: IInitialState | undefined) {
    const currentUser = initialState?.currentUser as any;

    return {
        isCustomer: !!(currentUser && currentUser.role === UserRole.CUSTOMER),
        isStaff: !!(currentUser && currentUser.role === UserRole.STAFF),
        isAdmin: !!(currentUser && currentUser.role === UserRole.ADMIN),
    };
}