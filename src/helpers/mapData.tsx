import Card from "../components/Card/Card";
import React from "react";

const mapData = (data: CardDataItem[]) => {
    const elements = data.map((item) => {
        console.log(item.label, item.parentId);
        return ({
            ...item,
            hasChildren: data.filter((i) => i.parentId === item.id).length > 0,
        });
    });
    const parentId = 0;
    const level = 0;

    const items = elements.filter((item) => item.parentId === parentId);

    if (!items.length) return null;

    return (
        <Card cardData={elements} parentId={parentId} level={level} />
    );
};

export default mapData;
