import React from 'react';
import PropTypes from 'prop-types';

import { POP_UP_INITIAL_VALUES } from 'constants';

import { addCardSchema } from 'helpers';
import { useCard } from 'hooks';

import { CommonPopUp } from 'ui';

import CardSettings from '../cardSettings/CardSettings';

const CardPopUp = ({ columnId, cardIndex, card, handleModalClose }) => {
  const {
    priority,
    deadline,
    setDeadline,
    handleInput,
    handlePriority,
    handleCardSubmit,
  } = useCard(columnId, cardIndex, card, handleModalClose);

  const { cardValues } = POP_UP_INITIAL_VALUES;

  const inputs = [
    {
      name: 'title',
      type: 'text',
      placeholder: card ? card?.title : 'Title',
    },
    {
      name: 'description',
      type: 'text',
      placeholder: card ? card?.description : 'Description',
      multiline: true,
    },
  ];

  return (
    <CommonPopUp
      title={card ? 'Edit card' : 'Add card'}
      onClose={handleModalClose}
      onSubmit={handleCardSubmit}
      onChange={handleInput}
      inputs={inputs}
      initialValues={cardValues}
      validationSchema={card ? null : addCardSchema}
      buttonText={card ? 'Edit' : 'Create'}
      version="settingsPopUp"
      hasIcon={true}
      variant="primary"
      id="create-or-edit-card-button"
    >
      <CardSettings
        priority={priority}
        deadline={new Date(deadline)}
        handlePriority={handlePriority}
        setDeadline={setDeadline}
      />
    </CommonPopUp>
    // <PopUpLayout
    //   title={card ? 'Edit card' : 'Add card'}
    //   handleClose={handleModalClose}
    // >
    //   {/* <Form > */}
    //   <ul>
    //     <InputItem>
    //       <Input
    //         name="title"
    //         onChange={handleInput}
    //         placeholder={card ? card?.title : 'Title'}
    //       />
    //       {titleChecker ? <ErrorMessage>Title is required</ErrorMessage> : null}
    //     </InputItem>
    //     <InputItem>
    //       <Input
    //         name="description"
    //         onChange={handleInput}
    //         multiline={true}
    //         placeholder={card ? card?.description : 'Description'}
    //       />
    //       {descriptionChecker ? (
    //         <ErrorMessage>Description is required</ErrorMessage>
    //       ) : null}
    //     </InputItem>
    //   </ul>
    //   <CardSettings
    // priority={priority}
    // deadline={new Date(deadline)}
    // handlePriority={handlePriority}
    // setDeadline={setDeadline}
    //   />
    //   <PrimaryButton
    //     version="settingsPopUp"
    //     id="create-or-edit-card-button"
    //     hasIcon={true}
    //     variant="primary"
    //     onClick={handleCardSubmit}
    //   >
    //     {card ? 'Edit' : 'Create'}
    //   </PrimaryButton>
    //   {/* </Form> */}
    // </PopUpLayout>
  );
};

export default CardPopUp;

CardPopUp.propTypes = {
  columnId: PropTypes.string,
  cardIndex: PropTypes.number,
  card: PropTypes.shape({
    cardOwner: PropTypes.string,
    deadline: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
    order: PropTypes.number,
    priority: PropTypes.string,
    title: PropTypes.string,
  }),
  handleModalClose: PropTypes.func.isRequired,
};
