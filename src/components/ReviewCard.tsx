import { star } from "../assets/icons";

interface ReviewCardProps{
    imgURL:string;
    customerName:string;
    rating:number;
    feedback:string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex flex-col justify-center items-center">
        <img 
            src={imgURL} 
            alt="Customer's Photo"
            width={200} 
            className="rounded-full mt-4 object-contain w-[120px] h-[120px]"
        />
        <p className="font-palanquin info-text mt-6 max-w-sm text-center">{feedback}</p>
        <div className="m-3 flex justify-center items-center gap-2.5">
           <img src={star} alt="" width={24} height={24}/>
           <p className="font-montserrat">({rating})</p>
        </div>
        <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
    </div>
  )
}

export default ReviewCard