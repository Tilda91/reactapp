import { useState } from "react"

const FaqItem = ( { item }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpand = () => {
        setIsExpanded(prev => !prev)
    }

    return (
        <div className="faq-item" key={item.id}>
        <button className={`faq-question ${isExpanded && 'active'}`} onClick={toggleExpand}>
                <p>{item.title}</p>
                <span className={` ${isExpanded ? 'btn-circle-up' : 'btn-circle'}`}>
                    <i className={`fa-solid ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </span>
            </button>
            <div className={`faq-answer ${isExpanded ? 'open' : ''}`}>
                <p>{item.content}</p>
            </div>
        </div>
    )
}

export default FaqItem