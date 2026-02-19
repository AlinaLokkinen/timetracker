import exercise from '/icon-exercise.svg'
import work from '/icon-work.svg'
import study from '/icon-study.svg'
import selfcare from '/icon-self-care.svg'
import social from '/icon-social.svg'
import play from '/icon-play.svg'

const Card = ({ d, timeframe }) => {
  const getColor = () => {
    switch (d.title.toLowerCase()) {
      case "work":
        return "bg-work";
      case "play":
        return "bg-play";
      case "study":
        return "bg-study";
      case "exercise":
        return "bg-exercise";
      case "social":
        return "bg-social";
      case "self care":
        return "bg-self-care";
    }
  };

  const getIcon = () => {
    switch(d.title.toLowerCase()) {
        case 'work': return work;
        case 'play': return play;
        case 'exercise': return exercise;
        case 'study': return study;
        case 'social': return social;
        case 'self care': return selfcare;
    
    }
  }

  return (
    <div className="relative">
      <div className={`${getColor()} rounded-t-xl  absolute w-full h-4/5`}>
        <div className='flex justify-end h-1/3 px-2'>
            <img src={`${getIcon()}`} alt="icon"  />
        </div>
      </div>
      <div className="bg-card-bg hover:bg-card-hover rounded-xl p-5 absolute w-full h-4/5 top-7">
        <p className='text-[13px] mb-3 font-normal'> {d.title}</p>
        <p className='text-[30px]'>{d.timeframes[timeframe].current}hrs</p>
        <p className='text-[12px] text-white/50'>
          {timeframe === "daily"
            ? "Yesterday - "
            : timeframe === "weekly"
              ? "Last week - "
              : "Last month - "}
          {d.timeframes[timeframe].previous}hrs
        </p>
      </div>
    </div>
  );
};

export default Card;
