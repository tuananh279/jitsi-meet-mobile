/* eslint-disable lines-around-comment */
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

// @ts-ignore
import { createToolbarEvent, sendAnalytics } from '../../../analytics';
import Button from '../../../base/components/common/Button';
import { IconInviteMore } from '../../../base/icons/svg/index';
import { BUTTON_TYPES } from '../../../base/react/constants';
// @ts-ignore
import { beginAddPeople } from '../../../invite';

export const InviteButton = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const onInvite = useCallback(() => {
        sendAnalytics(createToolbarEvent('invite'));
        dispatch(beginAddPeople());
    }, [ dispatch ]);

    return (
        <Button
            accessibilityLabel = { t('participantsPane.actions.invite') }
            fullWidth = { true }
            icon = { IconInviteMore }
            label = { t('participantsPane.actions.invite') }
            onClick = { onInvite }
            type = { BUTTON_TYPES.PRIMARY } />
    );
};
