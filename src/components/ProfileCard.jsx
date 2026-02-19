import jeremy from '/image-jeremy.png'

const ProfileCard = ({ timeframe, setTimeframe }) => {
  return (
    <div className="lg:h-full flex flex-col">
      <div className="bg-primary lg:h-2/3 rounded-md overflow-hidden flex lg:flex-col lg:justify-center lg:p-4">
        <div>
          <img 
          className='border-2 rounded-full lg:w-1/3 w-1/6 lg:mb-5'
          src={jeremy} alt="a picture of a man" />
        </div>
        <div className='lg:w-1/2 '>
          <p className='lg:text-[10px] text-white/50'>Report for</p>
          <p className='lg:text-[25px]'>Jeremy Robson</p>
        </div>
      </div>
      <div className="bg-card-bg flex lg:flex-col lg:items-start lg:gap-2 text-[12px] p-3 lg:h-1/3 rounded-b-md ">
        <a
          className={`${timeframe === "daily" ? "text-white " : "text-white/50 hover:text-white"}`}
          onClick={() => setTimeframe("daily")}
        >
          Daily
        </a>
        <a
          className={`${timeframe === "weekly" ? "text-white " : "text-white/50 hover:text-white"}`}
          onClick={() => setTimeframe("weekly")}
        >
          Weekly
        </a>
        <a
          className={`${timeframe === "monthly" ? "text-white " :"text-white/50 hover:text-white"}`}
          onClick={() => setTimeframe("monthly")}
        >
          Monthly
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
