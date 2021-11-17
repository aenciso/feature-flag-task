import React, {useState} from 'react';
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import classnames from "classnames";
import Switch from '@mui/material/Switch';
import "./CardItem.scss";


const CardItem = ({item, level, children}: CardItemProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const {hasChildren, label, id, checked, parentId} = item;
    const [state, setState] = React.useState({
        [`item-${id}`]: checked
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [event.target.name]: !event.target.checked,
        });
    };
    return (
        <div key={`section-${id}`}>
            <div

                className={classnames('cardItem', `level-${level}`)}
                onClick={() => setIsCollapsed(!isCollapsed)}
            >
                <span className="text">
                    {label}
                    {hasChildren ? parentId !== 0 &&
                        <ChevronRightIcon
                            className={classnames('chevron', {
                                'rotated': !isCollapsed,
                            })}
                        /> : null}
                    {parentId !== 0 && <Switch defaultChecked={checked} onChange={handleChange} name={`item-${id}`}
                                               data-parent={parentId}/>}
                </span>
            </div>
            <div
                className={classnames('children', {
                    'collapsed': isCollapsed,
                })}
            >
                {children}
            </div>
        </div>
    );
};

export default CardItem;
