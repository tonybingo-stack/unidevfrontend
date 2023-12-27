import React from "react";

interface MyCardProps {
    percentage: number;
    shortText: string;
    longDesc: string;
    backgroundcolor: string;
}

const Card: React.FC<MyCardProps> = (props) => {
    return (
        <>
            <div className="basis-1/4">
                <div className={`${props.backgroundcolor} h-48 p-8 mb-4`}>
                    <div className="flex items-end">
                        <p className="text-5xl font-medium">{props.percentage}</p>
                        <p className="text-3xl">%</p>
                    </div>
                    <div className="mr-20 mt-8">{ props.shortText }</div>
                </div>
                <div className="text-lg">{ props.longDesc }</div>
            </div>
        </>
    );
};

export default Card;

