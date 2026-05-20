import Footer from '@/components/Footer';
import RightContent from '@/components/RightContent';
import { notification } from 'antd';
import 'moment/locale/vi';
import type { RequestConfig, RunTimeLayoutConfig } from 'umi';
import { getIntl, getLocale, history } from 'umi';
import type { RequestOptionsInit, ResponseError } from 'umi-request';
import ErrorBoundary from './components/ErrorBoundary';
import { OIDCBounder } from './components/OIDCBounder';
import OneSignalBounder from './components/OneSignalBounder';
import TechnicalSupportBounder from './components/TechnicalSupportBounder';
import NotAccessible from './pages/exception/403';
import NotFoundContent from './pages/exception/404';
import type { IInitialState } from './services/base/typing';
import './styles/global.less';
import { bootstrapMockData } from '@/services/QuanLyComRang/mockData';
import { getCurrentUser } from '@/utils/auth';
import { UserRole } from '@/models/quanlycomrang/users';

export const initialStateConfig = {
    loading: <></>,
};

export async function getInitialState(): Promise<IInitialState> {
    bootstrapMockData(); 
    const currentUser = getCurrentUser(); 
    return {
        permissionLoading: false,
        currentUser: currentUser || undefined, 
    };
}
const authHeaderInterceptor = (url: string, options: RequestOptionsInit) => ({});
export const request: RequestConfig = {
    errorHandler: (error: ResponseError) => {
        const { messages } = getIntl(getLocale());
        const { response } = error;
        if (response && response.status) {
            const { status, statusText, url } = response;
            const requestErrorMessage = messages['app.request.error'];
            const errorMessage = `${requestErrorMessage} ${status}: ${url}`;
            const errorDescription = messages[`app.request.${status}`] || statusText;
            notification.error({
                message: errorMessage,
                description: errorDescription,
            });
        }

        if (!response) {
            notification.error({
                description: 'Yêu cầu gặp lỗi',
                message: 'Bạn hãy thử lại sau',
            });
        }
        throw error;
    },
    requestInterceptors: [authHeaderInterceptor],
};

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
    return {
        unAccessible: (
            <OIDCBounder>
                <TechnicalSupportBounder>
                    <NotAccessible />
                </TechnicalSupportBounder>
            </OIDCBounder>
        ),
        noFound: <NotFoundContent />,
        rightContentRender: () => <RightContent />,
        disableContentMargin: false,
        footerRender: () => <Footer />,

        onPageChange: () => {
            const { location } = history;
            const currentUser = initialState?.currentUser;
            
            if (!currentUser && !location.pathname.startsWith('/user')) {
                history.replace('/user/login');
            }
            if (currentUser && location.pathname === '/') {
                const role = currentUser as any;
                if (role.role === UserRole.CUSTOMER) history.replace('/customer/home');
                if (role.role === UserRole.STAFF) history.replace('/staff/pos');
                if (role.role === UserRole.ADMIN) history.replace('/admin/dashboard');
            }
        },
        menuItemRender: (item: any, dom: any) => (
            <a
                className='not-underline'
                key={item?.path}
                href={item?.path}
                onClick={(e) => {
                    e.preventDefault();
                    history.push(item?.path ?? '/');
                }}
                style={{ display: 'block' }}
            >
                {dom}
            </a>
        ),

        childrenRender: (dom) => (
            <OIDCBounder>
                <ErrorBoundary>
                    <OneSignalBounder>{dom}</OneSignalBounder>
                </ErrorBoundary>
            </OIDCBounder>
        ),
        menuHeaderRender: undefined,
        ...initialState?.settings,
    };
};