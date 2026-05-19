export default [
    {
        path: '/user',
        layout: false,
        routes: [
            {
                path: '/user/login',
                layout: false,
                name: 'login',
                component: './Auth/Login',
            },
            {
                path: '/user',
                redirect: '/user/login',
            },
        ],
    },
    {
        path: '/customer',
        name: 'Cửa Hàng Cơm Rang',
        icon: 'shop',
        access: 'isCustomer', 
        routes: [
            {
                path: '/customer/home',
                name: 'Khám phá Thực đơn',
                component: './Customer/Home',
            },
            {
                path: '/customer/cart',
                name: 'Giỏ hàng của tôi',
                component: './Customer/Cart',
            },
            {
                path: '/customer/history',
                name: 'Lịch sử mua hàng',
                component: './Customer/History',
            },
        ],
    },

    {
        path: '/staff',
        name: 'Bàn Làm Việc Thu Ngân',
        icon: 'desktop',
        access: 'isStaff',
        routes: [
            {
                path: '/staff/pos',
                name: 'Bảng điều khiển Đơn hàng',
                component: './Staff/POS',
            },
            {
                path: '/staff/inventory',
                name: 'Quản lý Kho cấp tốc',
                component: './Staff/Inventory',
            },
        ],
    },

    {
        path: '/admin',
        name: 'Quản Trị Hệ Thống',
        icon: 'setting',
        access: 'isAdmin',
        routes: [
            {
                path: '/admin/dashboard',
                name: 'Báo cáo doanh thu',
                component: './Admin/Dashboard',
            },
            {
                path: '/admin/menu',
                name: 'Quản lý Thực đơn',
                component: './Admin/MenuManage',
            },
            {
                path: '/admin/user',
                name: 'Quản lý Người dùng',
                component: './Admin/UserManage',
            },
        ],
    },
    {
        path: '/',
        redirect: '/user/login', 
    },
    {
        path: '/403',
        component: './exception/403/403Page',
        layout: false, 
    },
    {
        path: '/hold-on',
        component: './exception/DangCapNhat',
        layout: false,
    },
    {
        component: './exception/404', 
    },
];