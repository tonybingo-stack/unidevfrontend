import React from "react";
import LoadingBar from "./loadingbar";

interface MyCardProps {
    percentage: number;
    shortText: string;
    longDesc: string;
    backgroundcolor: string;
    isDataExist: boolean
}

const Card: React.FC<MyCardProps> = (props) => {
    return (
        <>
            <div className="basis-1/4">
                <div className={`${props.backgroundcolor} h-48 p-8 mb-4`}>
                    <div className="flex items-end">
                        <p className="text-5xl font-medium">{props.isDataExist ? props.percentage : ''}</p>
                        <p className="text-3xl">{props.isDataExist ? '%' : ''}</p>
                    </div>
                    <div className="mr-20 mt-8">{props.isDataExist ? props.shortText : ''}</div>
                </div>
                {props.isDataExist ?
                    <div className="text-lg">{props.longDesc}</div>
                    :
                    <div className="w-full flex flex-col">
                        <LoadingBar width={100} height={15} myClass="w-full" />
                        <div className="w-full h-1"></div>
                        <LoadingBar width={100} height={15} myClass="w-1/2" />
                        <div className="w-full h-1"></div>
                        <LoadingBar width={100} height={15} myClass="w-3/4" />
                    </div>}
            </div>
        </>
    );
};

export default Card;

