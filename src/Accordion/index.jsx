import React from 'react';
import { string, bool, element, oneOfType, func } from 'prop-types';
import classNames from 'classnames';
import { Icon } from 'watson-react-components';

// eslint-disable-next-line no-use-before-define
Accordion.propTypes = {
  content: element.isRequired,
  header: oneOfType([
    element,
    string,
  ]).isRequired,
  onClickToggle: func.isRequired,
  show: bool,
};

export default function Accordion({ content, header, onClickToggle, show = false }) {
  return (
    <div className="accordion">
      <button
        type="button"
        className={
          classNames('accordion--row', { close: !show })
        }
        onClick={onClickToggle || null}
      >
        <div className="accordion--icon-container">
          <Icon type="right" />
        </div>
        <div className="accordion--header">
          { header }
        </div>
      </button>
      <div className="accordion--content">
        <div className="accordion--inner-content">
          { content }
        </div>
      </div>
    </div>
  );
}
