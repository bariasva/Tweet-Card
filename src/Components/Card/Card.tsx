import './Card.css'

export interface Props {
    title: string;
    paragraph: string;
    children?: React.ReactNode;
}


export default function Card({title, paragraph, children}: Props) {
    return (
        <>
            <div className="card">
                <div className='userInfo'>
                    <h2><a href='#'>{title}</a></h2>
                    <p>{paragraph}</p>
                </div>
            </div>
        </>
    )
}