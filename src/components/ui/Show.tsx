export const Show = ({
  children,
  isShow = false,
}: {
  children: React.ReactNode;
  isShow?: boolean;
}) => {
  return (
    <div
      className={`
      ${isShow ? 'block' : 'hidden'}`}
    >
      {children}
    </div>
  );
};
