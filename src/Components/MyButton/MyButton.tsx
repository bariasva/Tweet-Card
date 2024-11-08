import './MyButton.css'

interface Props {
    pic: string;
    number?: string;
}

export default function MyButton({pic, number}: Props){
    return (
        <button className='MyButton'>
            <img src={pic} alt="retweet" /> <p>{number}</p>
        </button>
    );
    
}
