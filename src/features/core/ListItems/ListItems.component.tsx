import React, {FC, PropsWithChildren} from 'react'

const ListItemsComponent: FC<PropsWithChildren> = ({children}) => {
    const childrenCount = React.Children.count(children)
    return (
        <div className="flex flex-col p-3">
            <div>Showing {childrenCount} of {childrenCount}</div>
            {children}
        </div>
    )
}

export default ListItemsComponent