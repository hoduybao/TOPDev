interface PropType {
  bgColor: string;
  textColor: string;
  title: string;
  value: number | string;
  icon: any;
}

const StatCard = (props: PropType) => {
  const { bgColor, textColor, title, value, icon } = props;

  return (
    <div style={{ backgroundColor: bgColor }} className={`rounded-md p-4 flex items-center gap-5`}>
      <div className='w-[90%]'>
        <h1 style={{ color: textColor }} className={`text-[30px] `}>
          {value}
        </h1>
        <h2 style={{ color: textColor }} className={`mt-3 text-[18px] font-semibold`}>
          {title}
        </h2>
      </div>
      <div style={{ color: textColor }} className='w-[10%] text-[23px]'>
        {icon}
      </div>
    </div>
  );
};

export default StatCard;
