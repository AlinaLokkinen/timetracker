import jeremy from '/image-jeremy.png'

const ProfileCard = ({ timeframe, setTimeframe }) => {
  return (
    <div className="h-full">
      <div className="bg-primary h-2/3 rounded-md overflow-hidden flex flex-col justify-center p-4">
        <div>
          <img 
          className='border-2 rounded-full w-1/3 mb-5'
          src={jeremy} alt="a picture of a man" />
        </div>
        <div className='w-1/2 '>
          <p className='text-[10px] text-white/50'>Report for</p>
          <p className='text-[25px]'>Jeremy Robson</p>
        </div>
      </div>
      <div className="bg-card-bg flex flex-col items-start gap-2 text-[12px] p-3 h-1/3 rounded-b-md ">
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
