import {FC, memo, ReactNode} from 'react';
import {Link as LinkRouters} from 'react-router-dom'

interface ILink {
    children: ReactNode,
    to: string
}

const Link:FC<ILink> = memo(({children, to} :ILink) => {
    return (
        <LinkRouters
            to={to}
            className='text-lightBlue font-mainFont text-lg
                 hover:text-lightBlueHover focus:underline'>
            {children}
        </LinkRouters>
    );
});

export default Link;