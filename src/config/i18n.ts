import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // pass the i18n instance to initReactI18next
  .init({
    // Configuration options
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language
    resources: {
      en: {
        translation: {
          candidate: {
            title: 'Candidate',
            sortByPos: 'Sort by job position',
            allApplication: 'All application',
          },
          report: {
            title: 'Report',
            ra: 'Recruitment analysis',
            sa: 'Source Analysis',
            tisa: 'Time In Stage Analysis',
            tp: 'Team Performance',
          },
          configuration: {
            title: 'Configuration',
            st: 'Settings',
            type: 'Type of job',
            rfr: 'Reason for refused',
            room: 'Department',
            skills: 'Skills',
            acts: 'Activities',
          },
          importData: 'Import data',
          search: {
            title: 'Search...',
            hobby: 'My favorites',
            jobHobby: 'My favorite job position',
          },
          jobPosition: 'Job position',
          newJob: {
            content: 'New',
            position: 'Position',
            title: 'Create a Job position',
            email: 'Email for application',
            noteTitle: 'Note',
            noteContent:
              'Candidates can send their resume to this email address, it will automatically create an application.',
            create: 'Create',
            cancel: 'Cancel',
          },
          headerUserMenu: {
            document: 'Document',
            support: 'Support',
            Keyword: 'Keyword',
            dm: 'Dark Mode',
            info: 'My information',
            db: 'My Database',
          },
          chatHeader: {
            all: 'All',
            chat: 'Chat',
            channel: 'Channel',
            newNoti: 'New Notification',
          },
          recruitment: {
            card: {
              in: {
                newCandidate: 'New Candidate',
                forRe: 'For Recruitment',
                candidate: 'Candidate',
              },
              dropdown: {
                view: 'View Candidate',
                forRe: 'Activities',
                candidate: 'Supervisor',
              },
            },
          },
        },
      },
      vi: {
        translation: {
          candidate: {
            title: 'Ứng viên',
            sortByPos: 'Theo vị trí công việc',
            allApplication: 'Tất cả đơn xin việc',
          },
          report: {
            title: 'Báo cáo',
            ra: 'Phân tích tuyển dụng',
            sa: 'Phân tích nguồn',
            tisa: 'Phân tích theo giao đoạn',
            tp: 'Hiệu suất nhóm',
          },
          configuration: {
            title: 'Cấu hình',
            st: 'Cài đặt',
            type: 'Loại việc làm',
            rfr: 'Các lý do từ chối',
            room: 'Phòng ban',
            skills: 'Các loại kĩ năng',
            acts: 'Loại hoạt động',
          },
          importData: 'Tải dữ liệu',
          search: {
            title: 'Tìm kiếm...',
            hobby: 'Mục yêu thích của tôi',
            jobHobby: 'Vị trí công việc yêu thích của tôi',
          },
          jobPosition: 'Vị trí công việc',
          newJob: {
            content: 'Mới',
            position: 'Chức vụ',
            title: 'Tạo một Vị trí Công việc',
            email: 'Email cho đơn ứng tuyển',
            noteTitle: 'Ghi chú',
            noteContent:
              'Ứng viên có thể gửi hồ sơ đến địa chỉ email này, nó sẽ tạo một đơn ứng tuyển một cách tự động',
            create: 'Tạo',
            cancel: 'Hủy bỏ',
          },
          headerUserMenu: {
            document: 'Tài liệu',
            support: 'Hỗ trợ',
            Keyword: 'Phím tắt',
            dm: 'Chế độ tối',
            info: 'Thông tin của tôi',
            db: 'Cơ sở dữ liệu cuả tôi',
          },
          chatHeader: {
            all: 'Tất cả',
            chat: 'Nhắn tin',
            channel: 'Kênh',
            newNoti: 'Thông báo mới',
          },
          recruitment: {
            card: {
              in: {
                newCandidate: 'ứng viên mới',
                forRe: 'Để tuyển dụng',
                candidate: 'Ứng viên',
              },
              dropdown: {
                view: 'Xem ứng viên',
                forRe: 'Hoạt động',
                candidate: 'Người giám sát',
              },
            },
          },
        },
      },
    },
  });

export default i18n;
