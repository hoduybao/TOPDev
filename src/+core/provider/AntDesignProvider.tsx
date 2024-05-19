import { ConfigProvider } from 'antd';

export default function AntDesignProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#dd3f24',
          borderRadius: 5,
        },
        components: {
          Form: {
            itemMarginBottom: 0,
          },
          Spin: {
            colorPrimary: '#dd3f24',
          },
          Badge: {
            textFontSize: 14,
            indicatorHeight: 18,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
