import { ConfigProvider } from 'antd';

export default function AntDesignProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {},
        components: {
          Form: {
            itemMarginBottom: 0,
          },
          Spin: {
            colorPrimary: '#dd3f24',
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
