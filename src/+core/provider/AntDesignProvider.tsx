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
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
