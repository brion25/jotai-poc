import React, {FC} from 'react'
import * as dateFns from 'date-fns'

interface ListItemComponentProps {
    title?: string
    subtitle?: string
    description: string,
    date?: string
}

const ListItemComponent: FC<ListItemComponentProps> = ({title, subtitle, description, date}) => {
    return (
        <div className="py-3 border-b-2 border-zinc-700">
            <h2 className="flex items-center justify-between">
                <span>{title ?? ''}</span>
                {date && (
                    <small>{dateFns.format(new Date(date), 'M/dd/yyyy')}</small>
                )}
            </h2>
            {subtitle && (
                <p>{subtitle}</p>
            )}
            <p className="truncate">{description}</p>
        </div>
    )
}

export default ListItemComponent
