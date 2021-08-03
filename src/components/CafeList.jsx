export const List = ({ cafe, onClick }) => {
  return (
    <li>
      <button
        onClick={onClick}
        className="flex items-center  w-full h-full p-4 gap-2  hover:bg-yellow-100 hover:text-yellow-600  focus:text-white focus:bg-yellow-300 font-normal md:p-7"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={cafe.icon} alt="" className="w-14 " />
        <div className="text-left text-xs">
          <p>{cafe.name}</p>
          <p>{cafe.place}</p>
          {cafe.open ? (
            !cafe.open ? (
              <p>閉店中</p>
            ) : (
              <p>開店中</p>
            )
          ) : (
            <p>営業時間はお問い合わせ下さい</p>
          )}
        </div>
      </button>
    </li>
  );
};
