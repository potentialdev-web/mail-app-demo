import React, {
  forwardRef
} from 'react';
import PropTypes from 'prop-types';

const Page = forwardRef(({
  children,
  title = '',
  ...rest
}, ref) => {
  return (
    <div
      ref={ref}
      {...rest}
    >
      {/* Willing to use Helmet here */}
      {/* <title>{title}</title> */}
      {children}
    </div>
  );
});

Page.propTypes = {
  children: PropTypes.node.isRequired,
  // title: PropTypes.string
};

export default Page;
