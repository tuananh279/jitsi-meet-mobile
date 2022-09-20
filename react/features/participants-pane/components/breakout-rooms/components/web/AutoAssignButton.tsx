/* eslint-disable lines-around-comment */
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import Button from '../../../../../base/components/common/Button';
import { BUTTON_TYPES } from '../../../../../base/react/constants';
// @ts-ignore
import { autoAssignToBreakoutRooms } from '../../../../../breakout-rooms/actions';

export const AutoAssignButton = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const onAutoAssign = useCallback(() => {
        dispatch(autoAssignToBreakoutRooms());
    }, [ dispatch ]);

    return (
        <Button
            accessibilityLabel = { t('breakoutRooms.actions.autoAssign') }
            fullWidth = { true }
            label = { t('breakoutRooms.actions.autoAssign') }
            onClick = { onAutoAssign }
            type = { BUTTON_TYPES.TERTIARY } />
    );
};
