import React from 'react';

const AppLayout = ({header, footer, aside, children}) => {
  return (
    <div className='font-mainFont flex flex-col items-center justify-center min-h-screen bg-gray-300'>
      <header>{header}</header>
      <aside>{aside}</aside>
      <main>{children}</main>
      <footer>{footer}</footer>
    </div>


  );
};

export default AppLayout;
