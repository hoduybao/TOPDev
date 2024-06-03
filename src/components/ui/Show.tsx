export const Show = ({
  children,
  isShow = false,
}: {
  children: React.ReactNode;
  isShow?: boolean;
}) => {
  return <div>{isShow ? children : null}</div>;
};
