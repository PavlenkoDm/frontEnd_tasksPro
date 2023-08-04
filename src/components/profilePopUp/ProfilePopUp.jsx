import React from 'react';
import PropTypes from 'prop-types';

import { UserAvatar, PopUpLayout, ButtonPlus, PrimaryButton } from 'components';

import { useEditProfile } from 'hooks';

import { Container, AvatarWrap, AddButtonWrap } from './profilePopUp.styled';

const ProfilePopUp = ({
  user,
  handleAddAvatar,
  handleEditProfile,
  handleModalClose,
}) => {
  const { editedUser, handleChangeProfile } = useEditProfile(user);

  return (
    <Container>
      <PopUpLayout title="Edit profile" handleClose={handleModalClose}>
        <AvatarWrap>
          <UserAvatar avatar={user?.avatarURL} />
          <AddButtonWrap>
            <ButtonPlus svgName="icon-plus" width={24} height={24} />
          </AddButtonWrap>
        </AvatarWrap>
        <input
          id="name"
          value={editedUser?.name}
          onChange={handleChangeProfile}
        />
        <input
          id="email"
          value={editedUser?.email}
          onChange={handleChangeProfile}
        />
        <input
          id="password"
          value={editedUser?.password}
          onChange={handleChangeProfile}
        />
        <PrimaryButton
          onClick={() => {
            console.log(editedUser);
          }}
          hasIcon={false}
        >
          Send
        </PrimaryButton>
      </PopUpLayout>
    </Container>
  );
};

ProfilePopUp.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  handleAddAvatar: PropTypes.func.isRequired,
  handleEditProfile: PropTypes.func.isRequired,
  handleModalClose: PropTypes.func.isRequired,
};

export default ProfilePopUp;
