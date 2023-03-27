import { SectionContainer } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <h2>{title}</h2>
      {children}
    </SectionContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
