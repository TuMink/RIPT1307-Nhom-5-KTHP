// src/utils/storage.ts

// Hàm khởi tạo dữ liệu mặc định nếu localStorage trống
export const initStorage = (key: string, defaultData: any) => {
  const existing = localStorage.getItem(key);
  if (!existing) {
    localStorage.setItem(key, JSON.stringify(defaultData));
  }
};

// Hàm lấy dữ liệu
export const getData = <T>(key: string): T[] => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

// Hàm lưu dữ liệu
export const saveData = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
  // Phát sự kiện để báo cho các tab khác (Dùng cho Realtime màn hình Bếp)
  window.dispatchEvent(new Event('storage_updated'));
};

// Hàm thêm mới 1 phần tử
export const insertItem = (key: string, item: any) => {
  const data = getData(key);
  data.push({ ...item, id: new Date().getTime().toString() }); // Tự tạo ID
  saveData(key, data);
};

// Hàm cập nhật 1 phần tử theo ID
export const updateItem = (key: string, id: string, updatedFields: any) => {
  let data = getData<any>(key);
  data = data.map(item => item.id === id ? { ...item, ...updatedFields } : item);
  saveData(key, data);
};